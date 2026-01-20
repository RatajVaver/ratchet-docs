# Roleplay Redux
This library will not function if your server doesn't have the [Roleplay Redux](https://steamcommunity.com/sharedfiles/filedetails/?id=3036058836) mod installed.

## `Roll` <Badge type="info" text="function" />

Syntax:
```lua
int RPR.Roll( Character player, string skill [, int modifier = 0, bool show = false, string comment = "" ] )
```

## `GetSkill` <Badge type="info" text="function" />

Syntax:
```lua
int, int RPR.GetSkill( Character player, string skill )
```

## `GetStat` <Badge type="info" text="function" />

Syntax:
```lua
int, int RPR.GetStat( Character player, string stat )
```

## `HasPerk` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.HasPerk( Character player, string perk )
```

## `AddPerk` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.AddPerk( Character player, string perk )
```

## `RemovePerk` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.RemovePerk( Character player, string perk )
```

## `ModifySkill` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.ModifySkill( Character player, string skill, int modifier )
```

## `ModifyStat` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.ModifyStat( Character player, string stat, int modifier )
```

## `SetStat` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.SetStat( Character player, string stat, int value )
```

## `SetStatMax` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.SetStatMax( Character player, string stat, int value )
```

## `HasRune` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.HasRune( Character player, int itemId )
```

## `HasBuff` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.HasBuff( Character player, string category )
```

## `RemoveBuff` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.RemoveBuff( Character player, string category )
```

## `GiveBuff` <Badge type="info" text="function" />
To understand buff types and other arguments, please refer to [Tot API docs](https://apiconan.totchinuko.fr/#/roleplay?id=givebuff-clientserver).

Alternatively you can use [BuffSkill](#buffskill), [BuffStat](#buffstat), [BuffPerk](#buffperk), [BuffAbility](#buffability), [BuffStatus](#buffstatus).

All of those are aliases for this function.

Syntax:
```lua
bool RPR.GiveBuff( Character player, string category, int buffType [, string target = category, int modifier = 0, int duration = -1, int delay = 0 ] )
```

## `BuffSkill` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.BuffSkill( Character player, string category, string skill, int modifier [, int duration = -1 ] )
```

## `BuffStat` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.BuffStat( Character player, string category, string stat, int modifier [, int duration = -1 ] )
```

## `BuffPerk` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.BuffPerk( Character player, string category, string perk [, int duration = -1 ] )
```

## `BuffAbility` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.BuffAbility( Character player, string category, string ability [, int duration = -1 ] )
```

## `BuffStatus` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.BuffStatus( Character player, string category, string status [, int duration = -1 ] )
```

## `HasItem` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.HasItem( Character player, int itemId [, int quantity = 1 ] )
```

## `TakeItem` <Badge type="info" text="function" />

Syntax:
```lua
void RPR.TakeItem( Character player, int itemId [, int quantity = 1 ] )
```

## `GiveItem` <Badge type="info" text="function" />

Syntax:
```lua
void RPR.GiveItem( Character player, int itemId [, int quantity = 1 ] )
```

## `GetBuffs` <Badge type="info" text="function" />

Syntax:
```lua
table<string> RPR.GetBuffs( Character player )
```

## `GetSheet` <Badge type="info" text="function" />
Returns a [CharacterSheet](/objects#charactersheet) object.

Syntax:
```lua
CharacterSheet RPR.GetSheet( Character player )
```

## `ResetSheet` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.ResetSheet( Character player )
```

## `ExportSheet` <Badge type="info" text="function" />

Syntax:
```lua
string RPR.ExportSheet( Character player )
```

## `ImportSheet` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.ImportSheet( Character player, string data )
```

## `HasSpell` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.HasSpell( Character player, string spell )
```

## `LearnSpell` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.LearnSpell( Character player, string spell )
```

## `ForgetSpell` <Badge type="info" text="function" />

Syntax:
```lua
bool RPR.ForgetSpell( Character player, string spell )
```

## `Refresh` <Badge type="info" text="function" />
Force RPR side panel to refresh for specific player.

Syntax:
```lua
void RPR.Refresh( Character player )
```

## `GetAbilities` <Badge type="info" text="function" />
Retrieves a list of all abilities in the RPR system.

A table is returned, containing [ReduxAbility](/objects#reduxability) objects.
If the `keyed` argument is set to true, then ability IDs will be used as table keys, otherwise the table is sequential by default.

Syntax:
```lua
table<ReduxAbility> RPR.GetAbilities( [ bool keyed = false ] )
```

## `GetEquippedRunes` <Badge type="info" text="function" />
Returns two tables. First one corresponds to item template IDs of the equipped runes while the other one corresponds to RPR rune IDs.
Both tables are sequential and their indexes should correspond to each other, however this is not guaranteed.

Syntax:
```lua
table<int>, table<int> RPR.GetEquippedRunes( Character player )
```

## `SetEquippedRunes` <Badge type="info" text="function" />
Forces a list of rune IDs to be equipped, replacing currently equipped runes.

Syntax:
```lua
void RPR.SetEquippedRunes( Character player, table<int> runes )
```

::: warning
Be super careful with this function when using it inside `RPR_updateRunes` event, as that could easily lead into infinite loop and slow down or even crash the server.
:::

## `GetUserStatus` <Badge type="info" text="function" />
Retrieves the custom status set by a user in RPR's Bio tab.

Syntax:
```lua
string, Color RPR.GetUserStatus( Character player )
```

## `SetUserStatus` <Badge type="info" text="function" />
Replaces the custom status in RPR's Bio tab and on nameplate.

Syntax:
```lua
void RPR.SetUserStatus( Character player, string name, Color color )
```

## `GetBio` <Badge type="info" text="function" />
Syntax:
```lua
table RPR.GetBio( Character player )
```

| Field | Type |
|-|-|
| `shortDesc` | string |
| `longDesc` | string |
| `renown` | string |
| `portrait` | string |

## `GetConsents` <Badge type="info" text="function" />
Syntax:
```lua
table RPR.GetConsents( Character player )
```

| Field | Type |
|-|-|
| `answers` | table&lt;string&gt; |
| `choices` | table&lt;table&lt;int&gt;&gt; |

Both fields are tables indexed by IDs, they might not be sequential.

## `ClearPerks` <Badge type="info" text="function" />
Remove all assigned perks from a character.

Syntax:
```lua
bool RPR.ClearPerks( Character player )
```

## `ClearSpells` <Badge type="info" text="function" />
Remove all learned spells from a character.

Syntax:
```lua
bool RPR.ClearSpells( Character player )
```

## `ClearBuffs` <Badge type="info" text="function" />
Remove all active buffs from a character.

Syntax:
```lua
bool RPR.ClearBuffs( Character player )
```

## `GetAssignedPerks` <Badge type="info" text="function" />
Returns a list of IDs of assigned perks. To retrieve perk names, use [GetSheet](#getsheet) instead.

Syntax:
```lua
table RPR.GetAssignedPerks( Character player )
```

## `GetLearnedSpells` <Badge type="info" text="function" />
Returns a list of IDs of learned spells.

Syntax:
```lua
table RPR.GetLearnedSpells( Character player )
```

## `GetActiveBuffs` <Badge type="info" text="function" />
Syntax:
```lua
table RPR.GetActiveBuffs( Character player )
```

| Field | Type |
|-|-|
| `category` | string |
| `type` | number |
| `target` | number |
| `modifier` | number |
| `from` | string |
| `until` | string |
| `permanent` | boolean |

## `GetLFRP` <Badge type="info" text="function" />
Retrieve the LFRP information of a player.

Syntax:
```lua
table RPR.GetLFRP( Character player )
```

| Field | Type |
|-|-|
| `enabled` | boolean |
| `showName` | boolean |
| `showMarker` | boolean |
| `name` | string |
| `self1` | string |
| `self2` | string |
| `looking1` | string |
| `looking2` | string |

## `SetLFRP` <Badge type="info" text="function" />
Set the LFRP information, uses the same options fields as [GetLFRP](#getlfrp).

Syntax:
```lua
void RPR.SetLFRP( Character player, table options )
```

## `GetWaypoints` <Badge type="info" text="function" />
Syntax:
```lua
table RPR.GetWaypoints()
```

| Field | Type |
|-|-|
| `id` | number |
| `enabled` | boolean |
| `hidden` | boolean |
| `showMarker` | boolean |
| `name` | string |
| `category` | string |
| `color` | [Color](/objects#color) |
| `location` | [Vector](/types/vector) |
| `rotation` | [Rotator](/types/rotator) |
