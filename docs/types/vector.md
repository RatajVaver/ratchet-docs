# Vector
Vector type represents a three-dimensional [Euclidean vector](https://en.wikipedia.org/wiki/Euclidean_vector).

This is most commonly used to refer to a specific point in the game world.

## Members
Vector consists of three scalar float values: `x`, `y`, `z`

All of these can be simply retrieved like values in a Lua table.

```lua
local vec = Vector(1,2,3)
print(vec.x)
print(vec.y)
print(vec.z)
```

## `Vector` <Badge type="info" text="constructor" />
Vector can be constructed directly using a function of the same name, or it can be a result of various functions such as [GetPosition](/types/character#getposition) of a player character object.

Syntax:
```lua
Vector Vector( [ float x, float y, float z ] )
```

Example:
```lua
local vec0 = Vector()
local vec1 = Vector(5)
local vec2 = Vector(5,10)
local vec3 = Vector(5,10,4)
```

## `length` <Badge type="info" text="function" />
Returns the magnitude of a vector.

Syntax:
```lua
float Vector:length()
```

Example:
```lua
local vec = Vector(1,2,3)
print(vec:length())
```

## `getNormalized` <Badge type="info" text="function" />
Returns a normalized (unit) vector. This is a vector with the same direction, but length (magnitude) of 1.

Syntax:
```lua
Vector Vector:getNormalized()
```

Example:
```lua
local vec = Vector(1,2,3)
print(vec:getNormalized():length()) -- always 1
```

## `getDistanceTo` <Badge type="info" text="function" />
Returns the distance between two vectors in centimeters.

Divide this by 256 if you want a distance in tiles.

Syntax:
```lua
float Vector:getDistanceTo( Vector other )
```

Example:
```lua {3}
local pos1 = player1:GetPosition()
local pos2 = player2:GetPosition()
local distance = pos1:getDistanceTo(pos2) / 256
print("Players are distanced " .. distance .. " tiles apart.")
```

## `getDistance2D` <Badge type="info" text="function" />
Returns the 2D distance between two vectors in centimeters.

Divide this by 256 if you want a distance in tiles.

Syntax:
```lua
float Vector:getDistance2D( Vector other )
```

## `findLookAtRotation` <Badge type="info" text="function" />
Syntax:
```lua
Rotator Vector:findLookAtRotation( Vector other )
```

## `getInFront` <Badge type="info" text="function" />
Returns a point `distance` centimeters in front of this vector, facing the given rotation.

Rotation can be either a [Rotator](/types/rotator) or a plain number representing yaw in degrees.

Syntax:
```lua
Vector Vector:getInFront( Rotator rotation, float distance )
Vector Vector:getInFront( float yaw, float distance )
```

Example:
```lua {3}
local pos = player:GetPosition()
local rot = player:GetRotation()
local dest = pos:getInFront(rot, 256) -- 1 tile in front of the player
```

::: tip
When a full Rotator is used, `pitch` tilts the direction up or down.

Pass only `.yaw` if you want the point to stay level.
:::

## `getOffset` <Badge type="info" text="function" />
Returns a point offset relative to the given rotation, `forward` along the facing direction, `right` to the side and optionally `up` as well.

Negative values go backward, left and down. Rotation can be either a [Rotator](/types/rotator) or a plain number representing yaw in degrees.

Syntax:
```lua
Vector Vector:getOffset( Rotator rotation, float forward, float right [, float up ] )
Vector Vector:getOffset( float yaw, float forward, float right [, float up ] )
```

Example:
```lua {3}
local pos = player:GetPosition()
local rot = player:GetRotation()
local spot = pos:getOffset(rot, 200, -100, 50) -- 2m ahead, 1m to the left, 0.5m up
```