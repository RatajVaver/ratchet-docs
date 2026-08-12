# Hook 🪝 <Badge type="tip" text="Enhanced" />
Hooks are similar to [events](/events), but where every listener registered with [on](/events#on) always runs unconditionally, Hook callbacks can **return a value**, and the first one that does stops the propagation, so other Hook callbacks never react as one already answered the query.

Callbacks can have a **priority**, controlling which one gets asked first. **Watchers** can be registered to always run to completion, even after another callback already answered.

[Fold](#fold) can run every callback through a custom combiner function instead of stopping at the first answer, useful for things like summing up modifiers contributed by multiple plugins.

## `Add` <Badge type="info" text="function" />
Registers an **answer** callback under a name. When [Run](#run) or [Fold](#fold) is called, answer callbacks run in priority order (highest first; equal priority runs in registration order) until one returns a non-nil value.

Syntax:
```lua
Hook.Add( string name, function callback [, int priority = 0 ] )
```

## `Watch` <Badge type="info" text="function" />
Registers a **watcher** callback under a name. Watchers always run to completion on every [Run](#run)/[Fold](#fold) call, regardless of whether an answer callback already returned a value elsewhere. Their return value is ignored.

Syntax:
```lua
Hook.Watch( string name, function callback [, int priority = 0 ] )
```

## `Remove` <Badge type="info" text="function" />
Unregisters a callback (added via [Add](#add) or [Watch](#watch)) from a name. Callback function has to be a variable reference that was used when registering, do not use anonymous functions.

Syntax:
```lua
Hook.Remove( string name, function callback )
```

## `Run` <Badge type="info" text="function" />
Runs every callback registered under a name. Answer callbacks ([Add](#add)) run in priority order until one returns a non-nil value, that value (or values, if it returns more than one) is what gets returned from `Run`, and no further answer callback runs afterward. Watcher callbacks ([Watch](#watch)) always run regardless.

Any number of arguments can be provided - these will be passed into every callback.

Syntax:
```lua
... Hook.Run( string name [, arguments... ] )
```

Example:
```lua
Hook.Add("canPlayerTeleport", function(player, destination)
    if isInCombat(player) then
        return false
    end
end)

Hook.Add("canPlayerTeleport", function(player, destination)
    if isRestrictedArea(destination) then
        return false
    end
end)

Hook.Watch("canPlayerTeleport", function(player, destination)
    print(player:GetName() .. " attempted to teleport to " .. tostring(destination))
end)

local allowed = Hook.Run("canPlayerTeleport", player, destination)
if allowed then
    TotAdmin.Teleport(player, destination)
else
    player:Notify("Teleportation is blocked here.")
end
```

## `Fold` <Badge type="info" text="function" />
Like [Run](#run), but instead of stopping at the first answer, it runs every answer callback (in priority order) through a combiner function that folds each result into an accumulator. Watcher callbacks ([Watch](#watch)) still run alongside this as usual and don't participate in folding.

The combiner runs after every answer callback (even ones that return nothing) as `function( accumulator, hookResult, index )` and must return the new accumulator value.

It can also return `true` as a second value to stop folding early, skipping any remaining answer callbacks and returning the current accumulated value.

Syntax:
```lua
mixed Hook.Fold( string name, mixed initial, function combiner [, arguments... ] )
```

Example: summing up a numeric modifier contributed by every hook.
```lua
Hook.Add("getDamageBonus", function(player) return 2 end)
Hook.Add("getDamageBonus", function(player) return 3 end)

local total = Hook.Fold("getDamageBonus", 0, function(acc, value)
    return acc + (value or 0)
end, player)
-- total is 5
```
