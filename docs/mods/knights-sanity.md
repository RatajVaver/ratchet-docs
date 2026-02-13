---
outline: deep
---

# Knight's Sanity
This library will not function if your server doesn't have the [Knight's Sanity](https://steamcommunity.com/sharedfiles/filedetails/?id=3373599765) mod installed.

## General

### AoE Shapes (Reference sheet)
| Type | Index | Shape |
|-|-|-|
| Point | 0 | Point |
| Point | 1 | Sphere |
| Point | 2 | Cylinder |
| MultiPoint | 0 | Wall |
| Directional | 0 | Cone |
| Directional | 1 | Line |
| Directional | 2 | Cube |

### `PushCharacter` <Badge type="info" text="function" />
Syntax:
```lua
void KS.PushCharacter( Character player, Vector origin, float distance, bool pull, bool sweep )
```

### `SelectCharacters` <Badge type="info" text="function" />
Syntax:
```lua
void KS.SelectCharacters( Character player, int targets, float maxDistance, table<string> allowedTargetTypes, bool allowPartial, bool allowRepeat, string command, string title )
```

Possible Target Types:
<div class="table-list">
<div class="entry-wide">Players</div>
<div class="entry-wide">Self</div>
<div class="entry-wide">Puppets</div>
<div class="entry-wide">NPC</div>
</div>

### `SelectPoint` <Badge type="info" text="function" />
Syntax:
```lua
void KS.SelectPoint( Character player, int shape, float maxDistance, float radius, float height, string command, Color color, string title )
```

### `SelectMultiPoint` <Badge type="info" text="function" />
Syntax:
```lua
void KS.SelectMultiPoint( Character player, int shape, float maxDistance, float length, float width, float height, string command, Color color )
```

### `SelectDirection` <Badge type="info" text="function" />
Syntax:
```lua
void KS.SelectDirection( Character player, int shape, float length, float width, string command, Color color, string title )
```

### `ProcessAoE` <Badge type="info" text="function" />
Syntax:
```lua
void KS.ProcessAoE( Character player, Vector point, int shape, float radius, float height, bool visualize, bool trace, Color color )
```

### `ProcessMultiPointAoE` <Badge type="info" text="function" />
Syntax:
```lua
void KS.ProcessMultiPointAoE( Character player, Vector first, Vector second, int shape, float width, float height, bool visualize, bool trace, Color color )
```

### `ProcessDirectionalAoE` <Badge type="info" text="function" />
Syntax:
```lua
void KS.ProcessDirectionalAoE( Character player, Vector point, Rotator direction, int shape, float length, float width, bool visualize, bool trace, Color color )
```

### `GetSelectedPoints` <Badge type="info" text="function" />
Syntax:
```lua
Vector, Vector, Rotator KS.GetSelectedPoints( Character player )
```

### `GetSelectedCharacters` <Badge type="info" text="function" />
Syntax:
```lua
table<Character|TotPuppet> KS.GetSelectedCharacters( Character player )
```

### `InfoBox` <Badge type="info" text="function" />
Syntax:
```lua
void KS.InfoBox( Character player, string title, string content )
```

### `CombatTracker` <Badge type="info" text="function" />
Syntax:
```lua
void KS.CombatTracker( Character player [, table<string> playerNames = {}, int activeTurn = -1 ] )
```

### `CreateCUI` <Badge type="info" text="function" />
Shows a Custom User Interface to a player. Generate definition code using [cui.ratajmods.net](https://cui.ratajmods.net).

Syntax:
```lua
void KS.CreateCUI( Character player, string definition )
```

### `Redlight` <Badge type="info" text="function" />
Toggle redlight warning on screen of all players.

Syntax:
```lua
void KS.Redlight( bool enabled [, bool blocking = false ] )
```

## Volumes
Volumes are static visualized areas, they can represent lasting area of effect, or anything else. They have essentially no functionality and only serve as visualizers.

### `KSVolume` <Badge type="info" text="constructor" />
KSVolume can be constructed directly using a function of the same name.

Syntax:
```lua
KSVolume KSVolume( Vector location, string shape, table options )
```

| Shape | Options |
|-------|------------------|
| `Sphere` | `radius`, `color` |
| `Cylinder` | `radius`, `height`, `color` |

### `GetColor` <Badge type="info" text="function" />
Syntax:
```lua
Color KSVolume:GetColor()
```

### `GetRadius` <Badge type="info" text="function" />
Syntax:
```lua
float KSVolume:GetRadius()
```

### `GetHeight` <Badge type="info" text="function" />
Syntax:
```lua
float KSVolume:GetHeight()
```

### `GetShape` <Badge type="info" text="function" />
Syntax:
```lua
string KSVolume:GetShape()
```

### `SetColor` <Badge type="info" text="function" />
Syntax:
```lua
void KSVolume:SetColor( Color color )
```

### `SetRadius` <Badge type="info" text="function" />
Syntax:
```lua
void KSVolume:SetRadius( float radius )
```

### `SetHeight` <Badge type="info" text="function" />
Syntax:
```lua
void KSVolume:SetHeight( float height )
```