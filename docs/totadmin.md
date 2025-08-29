---
outline: deep
---

# Tot ! Admin

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

### `GetPuppet` <Badge type="info" text="function" />
Use number if you want to find a puppet by its UID.\
Use string if you want to find a puppet by its internal name.

Syntax:
```lua
TotPuppet|nil TotAdmin.GetPuppet( int|string internalNameOrUID )
```

## Puppets
Functions in this section are to be called on a [TotPuppet](/objects#totpuppet) object.

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
Returns serialized RPR sheet. This is the same format that can be used in [RPR.ImportSheet](/redux#importsheet).

Syntax:
```lua
string TotPuppet:GetSheet()
```

### `SetSheet` <Badge type="info" text="function" />
Saves a serialized RPR sheet on a puppet. Use format returned from [RPR.ExportSheet](/redux#exportsheet).

Syntax:
```lua
void TotPuppet:SetSheet( string data )
```