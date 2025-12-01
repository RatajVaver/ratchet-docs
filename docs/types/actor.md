# Actor
Actors represent objects that exist in the game world. Every player character, NPC, building piece, decoration, container, map object, mod controller, and even the sky is an actor.

Actor type in Ratchet is used to contain functions that are shared across all of those objects and can be used on any type that inherits from an actor.

## `spawnActor` <Badge type="info" text="function" />
Syntax:
```lua
Actor|nil spawnActor( string actorTypeOrPath, Vector location [, Rotator rotation ] )
```

| Actor Type | Lua Object |
| - | - |
| TotPuppet | [TotPuppet](/mods/totadmin#puppets) |
| TotBoxZone | [TotZone](/mods/totadmin#zones) |
| TotSphereZone | [TotZone](/mods/totadmin#zones) |

::: danger
This feature is currently not working (Puppets/Zones will spawn but cannot be edited).
:::

## `findActor` <Badge type="info" text="function" />
Returns an actor instance (or nil) based on their name in the game world.

This will always return the general Actor type and never the specific class of an object.

Syntax:
```lua
Actor|nil findActor( string name )
```

Example:
```lua
local actor = findActor("MC_KnightsSanity_C_0")
```

::: warning
This is a heavy and potentially slow operation, it should not be used too often!

Additionally, working with unsupported UE actors can be dangerous. Only use this function if you know what you're doing.
There is no downcasting in Ratchet (e.g. converting Actor to Character).
:::

## `getActorsInRadius` <Badge type="info" text="function" />
Syntax:
```lua
table<Actor> getActorsInRadius( Vector location, float radius )
```

## `getActorsByClass` <Badge type="info" text="function" />
Syntax:
```lua
table<Actor> getActorsByClass( string path )
```

::: warning
This feature is currently not working, or maybe it does, but I have not yet figured out a path that works with it.
Let me know if you happen to get it to work, so I can provide instructions.
:::

## `IsValid` <Badge type="info" text="function" />
Syntax:
```lua
bool Actor:IsValid()
```

## `GetActorName` <Badge type="info" text="function" />
Syntax:
```lua
string Actor:GetActorName()
```

## `GetClassName` <Badge type="info" text="function" />
Syntax:
```lua
string Actor:GetClassName()
```

## `GetPathName` <Badge type="info" text="function" />
Syntax:
```lua
string Actor:GetPathName()
```

## `GetLocation` <Badge type="info" text="function" />
Syntax:
```lua
Vector Actor:GetLocation()
```

## `GetRotation` <Badge type="info" text="function" />
Syntax:
```lua
Rotator Actor:GetRotation()
```

## `SetLocation` <Badge type="info" text="function" />
Syntax:
```lua
bool Actor:SetLocation( Vector location, bool sweep, bool teleport )
```

## `SetRotation` <Badge type="info" text="function" />
Syntax:
```lua
bool Actor:SetRotation( Rotator rotation )
```

## `GetFeetLocation` <Badge type="info" text="function" />
Syntax:
```lua
Vector Actor:GetFeetLocation()
```

## `SetLocationAndRotation` <Badge type="info" text="function" />
Syntax:
```lua
bool Actor:SetLocationAndRotation( Vector location, Rotator rotation, bool sweep, bool teleport )
```

## `Teleport` <Badge type="info" text="function" />
Syntax:
```lua
bool Actor:Teleport( Vector location [, Rotator rotation ] )
```

## `GetDistanceTo` <Badge type="info" text="function" />
Syntax:
```lua
float Actor:GetDistanceTo( Actor other )
```

## `GetHorizontalDistanceTo` <Badge type="info" text="function" />
Syntax:
```lua
float Actor:GetHorizontalDistanceTo( Actor other )
```

## `GetVerticalDistanceTo` <Badge type="info" text="function" />
Syntax:
```lua
float Actor:GetVerticalDistanceTo( Actor other )
```

## `GetVelocity` <Badge type="info" text="function" />
Syntax:
```lua
Vector Actor:GetVelocity()
```

## `GetForwardVector` <Badge type="info" text="function" />
Syntax:
```lua
Vector Actor:GetForwardVector()
```

## `GetUpVector` <Badge type="info" text="function" />
Syntax:
```lua
Vector Actor:GetUpVector()
```

## `HasTag` <Badge type="info" text="function" />
Syntax:
```lua
bool Actor:HasTag( string tag )
```

## `IsOverlappingActor` <Badge type="info" text="function" />
Syntax:
```lua
bool Actor:IsOverlappingActor( Actor other )
```

## `GetEyesViewPoint` <Badge type="info" text="function" />
Syntax:
```lua
Vector, Rotator Actor:GetEyesViewPoint()
```

## `Destroy` <Badge type="info" text="function" />
Syntax:
```lua
void Actor:Destroy()
```

## `CallFunction` <Badge type="info" text="function" />
This is equivalent to `Call Function By Name` in the DevKit.

Only use this if you know what you're doing.

Syntax:
```lua
void Actor:CallFunction( string name )
```