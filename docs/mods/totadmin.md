---
outline: deep
---

# Tot ! Admin
This library will not function if your server doesn't have the [Tot ! Admin](https://steamcommunity.com/sharedfiles/filedetails/?id=2850232250) mod installed.

## General

### `RunScript` <Badge type="info" text="function" />
Runs a Tot script based on command and arguments. This is essentially the same as the `totscript` RCON command.

Syntax:
```lua
bool TotAdmin.RunScript( table<string> arguments )
```

Example:
```lua
TotAdmin.RunScript({ "scriptcmd", "Hello world!", player.ID })
```

### `Teleport` <Badge type="info" text="function" />
Teleport the player to the given position using Tot's internal teleport mechanism.

This will save a return position. Teleportation under 200m will be without loading screen.

Syntax:
```lua
bool TotAdmin.Teleport( Character player, Vector position [, float rotation = 0 ] )
```

### `Warp` <Badge type="info" text="function" />
Teleport the player to a warp by name.

Syntax:
```lua
bool TotAdmin.Warp( Character player, string warp )
```

### `GiveKit` <Badge type="info" text="function" />
Give the player a kit by name.

Syntax:
```lua
bool TotAdmin.GiveKit( Character player, string kit )
```

### `GetZone` <Badge type="info" text="function" />
Use number if you want to find a zone by its UID.\
Use string if you want to find a zone by its name.

Syntax:
```lua
TotZone|nil TotAdmin.GetZone( int|string nameOrUID )
```

### `GetPuppet` <Badge type="info" text="function" />
Use number if you want to find a puppet by its UID.\
Use string if you want to find a puppet by its internal name.

Syntax:
```lua
TotPuppet|nil TotAdmin.GetPuppet( int|string internalNameOrUID )
```

### `GetPuppetsInRadius` <Badge type="info" text="function" />
Syntax:
```lua
table<TotPuppet> TotAdmin.GetPuppetsInRadius( Vector location, float radius )
```

### `GetMapMarkers` <Badge type="info" text="function" />
Returns a list of all map markers as a table of [TotMapMarker](/objects#totmapmarker) objects.

Syntax:
```lua
table<TotMapMarker> TotAdmin.GetMapMarkers()
```

### `SetMapMarker` <Badge type="info" text="function" />
Syntax:
```lua
void TotAdmin.SetMapMarker( TotMapMarker data )
```

### `DeleteMapMarker` <Badge type="info" text="function" />
Syntax:
```lua
bool TotAdmin.DeleteMapMarker( GUID markerId )
```

## Zones
Functions in this section are to be called on a [TotZone](/objects#totzone) object.

Zones can either be spheres or boxes.

### `GetUID` <Badge type="info" text="function" />
Syntax:
```lua
int TotZone:GetUID()
```

### `GetName` <Badge type="info" text="function" />
Syntax:
```lua
string TotZone:GetName()
```

### `SetName` <Badge type="info" text="function" />
Syntax:
```lua
void TotZone:SetName( string name )
```

### `GetParam` <Badge type="info" text="function" />
Syntax:
```lua
string TotZone:GetParam( string name )
```

Available parameters:
- Name
- Radius (Sphere only)
- Extends (Box only)
- Enabled
- Trigger for Players
- Trigger for Spawned NPC
- Trigger for Vanilla NPC
- Trigger for Thralls
- Rules

### `SetParam` <Badge type="info" text="function" />
Syntax:
```lua
void TotZone:SetParam( string name, float|string value )
```

### `IsBox` <Badge type="info" text="function" />
Syntax:
```lua
bool TotZone:IsBox()
```

### `IsSphere` <Badge type="info" text="function" />
Syntax:
```lua
bool TotZone:IsSphere()
```

## Puppets
Functions in this section are to be called on a [TotPuppet](/objects#totpuppet) object.

Puppets inherit functions from Actors, any [Actor](/types/actor) functions can be used on Puppets as well.

Appearance of Puppets can be manipulated with [Tot ! Custom](/mods/totcustom) library.

### `Move` <Badge type="info" text="function" />
Syntax:
```lua
void TotPuppet:Move( Vector position [, float rotation = 0 ] )
```

### `GetPosition` <Badge type="info" text="function" />
Syntax:
```lua
Vector TotPuppet:GetPosition()
```

### `GetUID` <Badge type="info" text="function" />
Syntax:
```lua
int TotPuppet:GetUID()
```

### `GetName` <Badge type="info" text="function" />
Syntax:
```lua
string TotPuppet:GetName()
```

### `SetName` <Badge type="info" text="function" />
Syntax:
```lua
void TotPuppet:SetName( string displayName )
```

### `Delete` <Badge type="info" text="function" />
Syntax:
```lua
void TotPuppet:Delete()
```

### `SendLocal` <Badge type="info" text="function" />
Syntax:
```lua
void TotPuppet:SendLocal( string message [, float distance = 10 ] )
```

### `GetSheet` <Badge type="info" text="function" />
Returns serialized RPR sheet. This is the same format that can be used in [RPR.ImportSheet](/mods/redux#importsheet).

Syntax:
```lua
string TotPuppet:GetSheet()
```

### `SetSheet` <Badge type="info" text="function" />
Saves a serialized RPR sheet on a puppet. Use format returned from [RPR.ExportSheet](/mods/redux#exportsheet).

Syntax:
```lua
void TotPuppet:SetSheet( string data )
```

### `GetTags` <Badge type="info" text="function" />
Syntax:
```lua
table<TotPuppetTag> TotPuppet:GetTags()
```

### `SetTags` <Badge type="info" text="function" />
Syntax:
```lua
void TotPuppet:SetTags( table<TotPuppetTag> tags )
```