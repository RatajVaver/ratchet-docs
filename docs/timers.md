# Timers
Timers are used for delayed execution or even regular execution of a code.

### `setTimer` <Badge type="info" text="function" />
Triggers a callback once an amount of milliseconds pass. Can be repeated any amount of times.
Use zero for infinite interval. Returns an integer representing a timer handle that you can use to stop it.

Syntax:
```lua
int setTimer( function callback, int milliseconds, int repeat )
```

Example:
```lua
setTimer(function() print("Hello") end, 5000, 5)
```

### `killTimer` <Badge type="info" text="function" />
Use a timer handle returned from the [setTimer](#settimer) function to stop a timer.

Syntax:
```lua
killTimer( int handle )
```

Example:
```lua
local timer = setTimer(doStuff, 1000, 1)
killTimer(timer)
```