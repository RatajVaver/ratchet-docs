# Devious Desires
This library will not function if your server doesn't have Devious Desires installed:
- [Devious Desires](https://steamcommunity.com/sharedfiles/filedetails/?id=2300463941) <Badge type="warning" text="Legacy" />
- [Devious Desires](https://steamcommunity.com/sharedfiles/filedetails/?id=3731681816) <Badge type="tip" text="Enhanced" />

## `GetRestraints` <Badge type="info" text="function" />
Syntax:
```lua
table DD.GetRestraints( Character player )
```

| Field | Type | Description |
|-------|------|-------------|
| `isGagged` | boolean | Is the character gagged? |
| `isBlindfolded` | boolean | Is the character blindfolded? |
| `hasBoundHands` | boolean | Are the character's hands bound? |
| `hasBoundLegs` | boolean | Are the character's legs bound? |
| `armRestraint` | GameItem&vert;nil | Arms binder item (if any) |
| `handCuffs` | GameItem&vert;nil | Hand cuffs/rope item (if any) |
| `legCuffs` | GameItem&vert;nil | Leg cuffs/rope item (if any) |
| `blindfold` | GameItem&vert;nil | Blindfold item (if any) |
| `collar` | GameItem&vert;nil | Collar item (if any) |
| `gag` | GameItem&vert;nil | Gag item (if any) |

## `IsInPartnerScene` <Badge type="info" text="function" />
Syntax:
```lua
bool DD.IsInPartnerScene( Character player )
```

## `IsBeingCarried` <Badge type="info" text="function" />
Syntax:
```lua
bool DD.IsBeingCarried( Character player )
```

## `IsCarrying` <Badge type="info" text="function" />
Syntax:
```lua
bool DD.IsCarrying( Character player )
```