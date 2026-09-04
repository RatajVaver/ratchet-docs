---
outline: deep
---

# Task <Badge type="tip" text="Enhanced" />
Task is a coroutine-based async library.

## `Spawn` <Badge type="info" text="function" />
Starts running a function as a task.

Syntax:
```lua
int Task.Spawn( function callback [, arguments... ] )
```

Example:
```lua
Task.Spawn(function()
    print("started")
    Task.Wait(2000)
    print("two seconds later")
end)
```

## `SpawnNamed` <Badge type="info" text="function" />
Starts running a function as a *named* task. If a task with the same name (inside the same plugin) is running, it gets cancelled first.

Syntax:
```lua
int Task.SpawnNamed( string name, function callback [, arguments... ] )
```

Example:
```lua
Task.SpawnNamed("heartbeat", function()
    while true do
        Task.Wait(5000)
        doSomething()
    end
end)
```

## `Cancel` <Badge type="info" text="function" />
Cancels a task, given an ID or a name.

Syntax:
```lua
bool Task.Cancel( int|string identifier )
```

Example:
```lua
local id = Task.Delay(5000, function()
    print("this will never print")
end)

Task.Cancel(id)
```

## `Wait` <Badge type="info" text="function" />
Suspends the current task for an amount of milliseconds. Must be called from inside a task.

Syntax:
```lua
void Task.Wait( int milliseconds )
```

Example:
```lua
Task.Spawn(function()
    for i = 3, 1, -1 do
        print(i)
        Task.Wait(1000)
    end
    print("Start!")
end)
```

## `Await` <Badge type="info" text="function" />
Calls an object's method, assuming its last parameter is a callback, and suspends the current task until that callback fires. Must be called from inside a task.

This turns any existing callback-based API ([Database](/database), [Web](/libs/web), or your own) into something you can call as a single line instead of nesting a function inside it.

Syntax:
```lua
... Task.Await( table object, string method [, arguments... ] )
```

Example:
```lua {3}
Task.Spawn(function()
    local db = dbConnect("sqlite3", "data/test.db")
    local ok, err, rows = Task.Await(db, "prepare", "SELECT `value` FROM `settings` WHERE `key` = ?", { "motd" })
    if ok then
        print(rows[1].value)
    end
end)
```

```lua {2}
Task.Spawn(function()
    local ok, status, body = Task.Await(Web, "Get", "https://pokeapi.co/api/v2/pokemon/eevee")
    if ok and status == 200 then
        print(JSON.parse(body).name)
    end
end)
```

## `AwaitTimeout` <Badge type="info" text="function" />
Same as [Await](#await), but gives up after `timeoutMilliseconds` and returns `false, "timeout"` if the callback didn't finish in time.

Syntax:
```lua
... Task.AwaitTimeout( int timeoutMilliseconds, table object, string method [, arguments... ] )
```

Example:
```lua
Task.Spawn(function()
    local ok, status, body = Task.AwaitTimeout(2000, Web, "Get", "https://pokeapi.co/api/v2/pokemon/eevee")
    if not ok then
        printError(tostring(status))
        return
    end
    print(JSON.parse(body).name)
end)
```

## `Delay` <Badge type="info" text="function" />
Shorthand for spawning a task that begins suspended, similar to timers.

Syntax:
```lua
int Task.Delay( int milliseconds, function callback [, arguments... ] )
```

Example:
```lua
Task.Delay(5000, function()
    print("5 seconds passed")
end)
```

## `WaitUntil` <Badge type="info" text="function" />
Polls `predicate` every `intervalMilliseconds` until it returns a truthy value, or until `timeoutMilliseconds` passes.
Returns `true` if the predicate succeeded, `false` on timeout. Must be called from inside a task.

Syntax:
```lua
bool Task.WaitUntil( function predicate [, int intervalMilliseconds = 100, int timeoutMilliseconds ] )
```

Example:
```lua
Task.Spawn(function(player)
    local walking = Task.WaitUntil(function()
        return player:IsWalking()
    end, 250, 10000)

    if walking then
        player:Notify("Hello!")
    end
end, player)
```

## `All` <Badge type="info" text="function" />
Runs a list of functions concurrently, each as its own task, and suspends the current task until every one of them has finished.
Returns a table where each entry is a sequential table of callback result, or a `{ error = string }` if that function raised an error.
Keep in mind that one failing entry doesn't cancel the others. Must be called from inside a task.

Syntax:
```lua
table Task.All( table functions )
```

Example:
```lua
Task.Spawn(function()
    local results = Task.All({
        function() return Task.Await(db, "prepare", "UPDATE a SET c = 1 WHERE id = ?", { 1 }) end,
        function() return Task.Await(db, "prepare", "UPDATE b SET d = 1 WHERE id = ?", { 2 }) end,
    })

    for i, result in ipairs(results) do
        print(i, result.error or "ok")
    end
end)
```
