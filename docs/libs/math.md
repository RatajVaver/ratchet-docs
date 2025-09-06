# Math Extensions
Ratchet expands on the [standard math library](http://lua-users.org/wiki/MathLibraryTutorial) to give you a few more functions for convenience.
All standard Lua functions are available as well and not listed on this page.

## `round` <Badge type="info" text="function" />
Returns the value of a number rounded to the specified amount of decimal places or to nearest integer by default.

Syntax:
```lua
int math.round( float number [, int decimals = 0 ] )
```

## `clamp` <Badge type="info" text="function" />
Clamps a value within a range of values between a defined minimum bound and a maximum bound.

Syntax:
```lua
float math.clamp( float value, float min, float max )
```

## `lerp` <Badge type="info" text="function" />
Performs [linear interpolation](https://en.wikipedia.org/wiki/Linear_interpolation), returning a value between two numbers at a specific increment between 0 and 1.

Syntax:
```lua
float math.lerp( float start, float stop, float t )
```

## `distance` <Badge type="info" text="function" />
Calculates a distance between two points in 2D space using [Pythagorean theorem](https://en.wikipedia.org/wiki/Pythagorean_theorem).

Syntax:
```lua
float math.distance( float x1, float y1, float x2, float y2 )
```