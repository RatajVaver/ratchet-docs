# Tot ! Custom
This library will not function if your server doesn't have the [Tot ! Custom](https://steamcommunity.com/sharedfiles/filedetails/?id=2886779102) mod installed.

All of these functions are compatible with both [player characters](/types/character) and [puppets](/mods/totadmin#puppets).

## `GetBody` <Badge type="info" text="function" />

Syntax:
```lua
string TotCustom.GetBody( Character|TotPuppet actor )
```

## `GetArmor` <Badge type="info" text="function" />

Syntax:
```lua
string TotCustom.GetArmor( Character|TotPuppet actor )
```

## `GetAccessories` <Badge type="info" text="function" />

Syntax:
```lua
string TotCustom.GetAccessories( Character|TotPuppet actor )
```

## `SetBody` <Badge type="info" text="function" />

Syntax:
```lua
bool TotCustom.SetBody( Character|TotPuppet actor, string data )
```

## `SetArmor` <Badge type="info" text="function" />

Syntax:
```lua
bool TotCustom.SetArmor( Character|TotPuppet actor, string data )
```

## `SetAccessories` <Badge type="info" text="function" />

Syntax:
```lua
bool TotCustom.SetAccessories( Character|TotPuppet actor, string data )
```

## `GetSliderValue` <Badge type="info" text="function" />

Syntax:
```lua
float TotCustom.GetSliderValue( Character|TotPuppet actor, string key )
```

## `SetSliderValue` <Badge type="info" text="function" />

Syntax:
```lua
bool TotCustom.SetSliderValue( Character|TotPuppet actor, string key, float value )
```

## `GetArmorPieces` <Badge type="info" text="function" />
Returns a list of item IDs of equipped armor pieces (in sequential table).

Syntax:
```lua
table<int> TotCustom.GetArmorPieces( Character|TotPuppet actor )
```

| Index | Slot |
|-|-|
| 1 | Head |
| 2 | Torso |
| 3 | Legs |
| 4 | Hands |
| 5 | Feet |

## `GetArmorPiece` <Badge type="info" text="function" />
Get an armor piece and its colors, uses same slot numbers as [GetArmorPieces](#getarmorpieces).

Syntax:
```lua
int, Color|nil, Color|nil, Color|nil, Color|nil TotCustom.GetArmorPiece( Character|TotPuppet actor, int slot )
```

## `SetArmorPiece` <Badge type="info" text="function" />
Set an armor piece on a character, uses same slot numbers as [GetArmorPieces](#getarmorpieces).

Make sure to either provide no colors (everything will be black), one color (which will be applied to all layers), or all of them.

Syntax:
```lua
bool TotCustom.SetArmorPiece( Character|TotPuppet actor, int slot, int itemId [, Color color1 [, Color color2, Color color3, Color color4 ] ] )
```

## `ClearArmorSlot` <Badge type="info" text="function" />
Remove an armor piece from a character, uses same slot numbers as [GetArmorPieces](#getarmorpieces).

Syntax:
```lua
bool TotCustom.ClearArmorSlot( Character|TotPuppet actor, int slot )
```