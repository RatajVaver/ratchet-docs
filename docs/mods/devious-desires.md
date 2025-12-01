# Devious Desires
This library will not function if your server doesn't have the [Devious Desires](https://steamcommunity.com/sharedfiles/filedetails/?id=2300463941) mod installed.

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
| `armRestraint` | Item&vert;nil | Arms binder item (if any) |
| `handCuffs` | Item&vert;nil | Hand cuffs/rope item (if any) |
| `legCuffs` | Item&vert;nil | Leg cuffs/rope item (if any) |
| `blindfold` | Item&vert;nil | Blindfold item (if any) |
| `collar` | Item&vert;nil | Collar item (if any) |
| `gag` | Item&vert;nil | Gag item (if any) |

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