---
outline: deep
---

# Tot ! Sudo
This library will not function if your server doesn't have the [Tot ! Sudo](https://steamcommunity.com/sharedfiles/filedetails/?id=3036057084) mod installed.

## `HasRole` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.HasRole( Character player, string name )
```

## `GrantRole` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.GrantRole( Character player, string name )
```

## `RevokeRole` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.RevokeRole( Character player, string name )
```

## `GetRoles` <Badge type="info" text="function" />

Syntax:
```lua
table<string> TotSudo.GetRoles( Character player )
```

## `HasPermission` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.HasPermission( Character player, string name )
```

## CharVars

### `HasCharTag` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.HasCharTag( Character player, string name )
```

### `AddCharTag` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.AddCharTag( Character player, string name )
```

### `RemoveCharTag` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.RemoveCharTag( Character player, string name )
```

### `GetCharFloat` <Badge type="info" text="function" />

Syntax:
```lua
float TotSudo.GetCharFloat( Character player, string name )
```

### `SetCharFloat` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.SetCharFloat( Character player, string name, float value )
```

### `RemoveCharFloat` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.RemoveCharFloat( Character player, string name )
```

### `GetCharString` <Badge type="info" text="function" />

Syntax:
```lua
string TotSudo.GetCharString( Character player, string name )
```

### `SetCharString` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.SetCharString( Character player, string name, string value )
```

### `RemoveCharString` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.RemoveCharString( Character player, string name )
```

## GlobVars

### `HasGlobTag` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.HasGlobTag( string name )
```

### `AddGlobTag` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.AddGlobTag( string name )
```

### `RemoveGlobTag` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.RemoveGlobTag( string name )
```

### `GetGlobFloat` <Badge type="info" text="function" />

Syntax:
```lua
float TotSudo.GetGlobFloat( string name )
```

### `SetGlobFloat` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.SetGlobFloat( string name, float value )
```

### `RemoveGlobFloat` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.RemoveGlobFloat( string name )
```

### `GetGlobString` <Badge type="info" text="function" />

Syntax:
```lua
string TotSudo.GetGlobString( string name )
```

### `SetGlobString` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.SetGlobString( string name, string value )
```

### `RemoveGlobString` <Badge type="info" text="function" />

Syntax:
```lua
bool TotSudo.RemoveGlobString( string name )
```