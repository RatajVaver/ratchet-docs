# Table Extensions
Ratchet expands on the [standard table library](http://lua-users.org/wiki/TableLibraryTutorial) to give you a few more functions for convenience.
All standard Lua functions are available as well and not listed on this page.

## `copy` <Badge type="info" text="function" />
Creates a deep copy of a table to break reference from the original.

Syntax:
```lua
table table.copy( table original )
```

## `merge` <Badge type="info" text="function" />
Merges multiple tables into one. Any amount of tables can be specified.

Syntax:
```lua
table table.merge( [ table first, ... ] )
```

## `swap` <Badge type="info" text="function" />
Swaps keys with values in a table.

Syntax:
```lua
table table.swap( table original )
```

## `reverse` <Badge type="info" text="function" />
Syntax:
```lua
table table.reverse( table original )
```

## `shuffle` <Badge type="info" text="function" />
Syntax:
```lua
table table.shuffle( table original )
```