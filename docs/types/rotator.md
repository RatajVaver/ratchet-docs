# Rotator
Rotators are very similar to [Vectors](/types/vector).

They are used to represent a rotation of an object in 3D space.

::: danger CAUTION
Players should never have `Pitch` and `Roll` (other than 0) applied to them!

Only `Yaw` is relevant for players to represent a direction they are facing.
:::

## Members
Rotator consists of three scalar float values: `pitch`, `yaw`, `roll`

All of these can be simply retrieved like values in a Lua table.

```lua
local rot = Rotator(1,2,3)
print(rot.pitch)
print(rot.yaw)
print(rot.roll)
```

## `Rotator` <Badge type="info" text="constructor" />
Rotator can be constructed directly using a function of the same name, or it can be retrieved as a result of various functions.

Syntax:
```lua
Rotator Rotator( [ float pitch, float yaw, float roll ] )
```

Example:
```lua
local rot0 = Rotator()
local rot1 = Rotator(5)
local rot2 = Rotator(5,10)
local rot3 = Rotator(5,10,4)
```