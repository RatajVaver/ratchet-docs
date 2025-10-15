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

## Volumes
Volumes are static visualized areas, they can represent lasting area of effect, or anything else. They have essentially no functionality and only serve as visualizers.

### `KSVolume` <Badge type="info" text="constructor" />
KSVolume can be constructed directly using a function of the same name.

Syntax:
```lua
KSVolume KSVolume( Vector location [, float radius = 1, Color color ] )
```

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