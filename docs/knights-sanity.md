# Knight's Sanity
This library will not function if your server doesn't have the [Knight's Sanity](https://steamcommunity.com/sharedfiles/filedetails/?id=3373599765) mod installed.

## `PushCharacter` <Badge type="info" text="function" />
Syntax:
```lua
void KS.PushCharacter( Character player, Vector origin, float distance, bool pull, bool sweep )
```

## `SelectCharacters` <Badge type="info" text="function" />
Syntax:
```lua
void KS.SelectCharacters( Character player, int targets, float maxDistance, table<string> allowedTargetTypes, bool allowPartial, bool allowRepeat, string command, string title )
```

## `SelectPoint` <Badge type="info" text="function" />
Syntax:
```lua
void KS.SelectPoint( Character player, int shape, float maxDistance, float radius, float height, string command, Color color, string title )
```

## `SelectMultiPoint` <Badge type="info" text="function" />
Syntax:
```lua
void KS.SelectMultiPoint( Character player, int shape, float maxDistance, float length, float width, float height, string command, Color color )
```

## `SelectDirection` <Badge type="info" text="function" />
Syntax:
```lua
void KS.SelectDirection( Character player, int shape, float length, float width, string command, Color color, string title )
```

## `ProcessAoE` <Badge type="info" text="function" />
Syntax:
```lua
void KS.ProcessAoE( Character player, Vector point, int shape, float radius, float height, bool visualize, bool trace, Color color )
```

## `ProcessMultiPointAoE` <Badge type="info" text="function" />
Syntax:
```lua
void KS.ProcessMultiPointAoE( Character player, Vector first, Vector second, int shape, float width, float height, bool visualize, bool trace, Color color )
```

## `ProcessDirectionalAoE` <Badge type="info" text="function" />
Syntax:
```lua
void KS.ProcessDirectionalAoE( Character player, Vector point, Rotator direction, int shape, float length, float width, bool visualize, bool trace, Color color )
```

## `GetSelectedPoints` <Badge type="info" text="function" />
Syntax:
```lua
Vector, Vector, Rotator KS.GetSelectedPoints( Character player )
```

## `GetSelectedCharacters` <Badge type="info" text="function" />
Syntax:
```lua
table<Character|TotPuppet> KS.GetSelectedCharacters( Character player )
```

## `InfoBox` <Badge type="info" text="function" />
Syntax:
```lua
void KS.InfoBox( Character player, string title, string content )
```