# Roleplay Enhanced <Badge type="tip" text="Enhanced" />
This library will not function if your server doesn't have the [Roleplay Enhanced](https://steamcommunity.com/sharedfiles/filedetails/?id=3744051043) mod installed.

::: warning
Roleplay Enhanced is only available on Conan Exiles **Enhanced**.
:::

## `GetLFRP` <Badge type="info" text="function" />
Syntax:
```lua
table RP2.GetLFRP( Character player )
```

| Field | Type |
|-|-|
| `status` | number |
| `active` | boolean |
| `showProfile` | boolean |
| `showMarker` | boolean |
| `name` | string |
| `me` | string |
| `looking` | string |

## `GetCharacter` <Badge type="info" text="function" />
Syntax:
```lua
table RP2.GetCharacter( Character player )
```

| Field | Type |
|-|-|
| `charId` | string |
| `identityId` | string |
| `status` | string |
| `statusColor` | Color |
| `description` | string |
| `portraitId` | string |
| `portraitUrl` | string |
| `actName` | string |
| `identityName` | string |
| `isDefault` | boolean |

## `GetCharacters` <Badge type="info" text="function" />
Syntax:
```lua
table RP2.GetCharacters( Character player )
```

| Field | Type |
|-|-|
| `id` | string |
| `name` | string |
| `active` | boolean |

## `CreateCharacter` <Badge type="info" text="function" />
Syntax:
```lua
bool, string RP2.CreateCharacter( Character player, string name )
```

## `DeleteCharacter` <Badge type="info" text="function" />
Syntax:
```lua
bool RP2.DeleteCharacter( Character player, string charId )
```

## `SwitchCharacter` <Badge type="info" text="function" />
Syntax:
```lua
bool RP2.SwitchCharacter( Character player, string charId )
```

## `GetKeys` <Badge type="info" text="function" />
Syntax:
```lua
table<int> RP2.GetKeys( Character player )
```

## `HasKey` <Badge type="info" text="function" />
Syntax:
```lua
bool RP2.HasKey( Character player, int lockId )
```

## `GiveKey` <Badge type="info" text="function" />
Syntax:
```lua
bool RP2.GiveKey( Character player, string itemId, int lockId )
```

## `RenameKey` <Badge type="info" text="function" />
Syntax:
```lua
bool RP2.RenameKey( Character player, string keyUid, string newName )
```

## `TeleportToWaypoint` <Badge type="info" text="function" />
Syntax:
```lua
void RP2.TeleportToWaypoint( Character player, string waypointId )
```

## `GetWaypoints` <Badge type="info" text="function" />
Syntax:
```lua
table RP2.GetWaypoints()
```

| Field | Type |
|-|-|
| `id` | string |
| `name` | string |
| `location` | [Vector](/types/vector) |
| `enabled` | boolean |
| `open` | boolean |

## Locks
[BuildingPiece](/objects#buildingpiece) objects also expose RP2's lock system directly:
- `:IsRP2Lockable`
- `:IsRP2Locked`
- `:SetRP2Locked`
- `:GetRP2Key`
- `:SetRP2Key`
- `:GetRP2LockType`
- `:HasRP2Key`
