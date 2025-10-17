# Utilities
This page documents miscellaneous functions that don't belong to any library.

## `getVersion` <Badge type="info" text="function" />
Returns the current version of Ratchet.

Syntax:
```lua
string getVersion()
```

## `getSecret` <Badge type="info" text="function" />
Reads a secret from `ratchet/secrets.txt` to avoid storing passwords or tokens in plugin code.
Empty string will be returned if a secret by the specified key is not found.

Syntax:
```lua
string getVersion( string key )
```

## `isServerLoaded` <Badge type="info" text="function" />
Checks whether the server is fully loaded (mods and plugins are loaded, players can connect).
This is mostly useful for a custom REST API to check whether the server is still starting.

Syntax:
```lua
bool isServerLoaded()
```

## `getType` <Badge type="info" text="function" />
Returns the name of an object type for a specific object.

Syntax:
```lua
string getType( mixed object )
```

## `base64Encode` <Badge type="info" text="function" />
Syntax:
```lua
string base64Encode( string input )
```

## `base64Decode` <Badge type="info" text="function" />
Syntax:
```lua
string base64Decode( string input )
```

## `friendlyTime` <Badge type="info" text="function" />
Converts number of seconds into human-friendly and readable format.

Syntax:
```lua
string friendlyTime( int seconds )
```

Example:
```lua
local time = friendlyTime(3600)
print(time) -- "1 hour"
```

## `traceLine` <Badge type="info" text="function" />
Trace a line between two points, detecting blocking object.

Syntax:
```lua
bool, HitResult traceLine( Vector origin, Vector destination [, int|table<string> filter = 0, bool complex = false, table<Actor> ignoreList = {} ] )
```

Filter can be either channel index from the table below or a table of strings representing object types from the table even further below.

| Index | Channel |
|-|-|
| 0 | Visibility |
| 1 | Camera |
| 2 | Trace_BuildingStructure |
| 3 | Trace_ProjectilePrecision |
| 4 | Trace_BuildingGhost |
| 5 | SandStormMonsterSpawn |
| 6 | Trace_Interactable |
| 7 | DamagePrevention_BlockNothing |

Object Types
<div class="table-list">
<div class="entry-wide">WorldStatic</div>
<div class="entry-wide">WorldDynamic</div>
<div class="entry-wide">Pawn</div>
<div class="entry-wide">PhysicsBody</div>
<div class="entry-wide">Vehicle</div>
<div class="entry-wide">Destructible</div>
<div class="entry-wide">Attack</div>
<div class="entry-wide">Defense</div>
<div class="entry-wide">Hitbox</div>
<div class="entry-wide">Building_Structure</div>
<div class="entry-wide">Projectile</div>
<div class="entry-wide">WaterPhysics</div>
<div class="entry-wide">Resource</div>
<div class="entry-wide">Sandstorm</div>
<div class="entry-wide">CollisionTrigger</div>
<div class="entry-wide">Hazard</div>
<div class="entry-wide">AudioTrigger</div>
<div class="entry-wide">LootBag</div>
</div>

## `printDebug` <Badge type="info" text="function" />
Same as the native `print` function, except for prepending plugin name and highlighting the message with **gray** color in the Ratchet console.
This message will also be saved to the `ratchet.log` file located in the server's folder.

Syntax:
```lua
void printDebug( [ string input, ... ] )
```

## `printInfo` <Badge type="info" text="function" />
Same as the native `print` function, except for prepending plugin name and highlighting the message with **blue** color in the Ratchet console.
This message will also be saved to the `ratchet.log` file located in the server's folder.

Syntax:
```lua
void printInfo( [ string input, ... ] )
```

## `printSuccess` <Badge type="info" text="function" />
Same as the native `print` function, except for prepending plugin name and highlighting the message with **green** color in the Ratchet console.
This message will also be saved to the `ratchet.log` file located in the server's folder.

Syntax:
```lua
void printSuccess( [ string input, ... ] )
```

## `printWarning` <Badge type="info" text="function" />
Same as the native `print` function, except for prepending plugin name and highlighting the message with **gold** color in the Ratchet console.
This message will also be saved to the `ratchet.log` file located in the server's folder.

Syntax:
```lua
void printWarning( [ string input, ... ] )
```

## `printError` <Badge type="info" text="function" />
Same as the native `print` function, except for prepending plugin name and highlighting the message with **red** color in the Ratchet console.
This message will also be saved to the `ratchet.log` file located in the server's folder.

Syntax:
```lua
void printError( [ string input, ... ] )
```