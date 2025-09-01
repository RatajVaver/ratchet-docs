# Actor
Actors represent objects that exist in the game world. Every player character, NPC, building piece, decoration, container, map object, mod controller, and even the sky is an actor.

Actor type in Ratchet is used to contain functions that are shared across all of those objects and can be used on any type that inherits from an actor.

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