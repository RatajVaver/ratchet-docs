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

## `keys` <Badge type="info" text="function" />
Syntax:
```lua
table table.keys( table list )
```

## `values` <Badge type="info" text="function" />
Syntax:
```lua
table table.values( table list )
```

## `contains` <Badge type="info" text="function" />
Syntax:
```lua
bool table.contains( table list, mixed value )
```

## `isEmpty` <Badge type="info" text="function" />
Checks whether a table is completely empty.

Syntax:
```lua
bool table.isEmpty( table list )
```

## `count` <Badge type="info" text="function" />
Returns the number of keys in a table, effectively counting the number of elements.

This should be used for non-sequential tables, otherwise standard `#` is more efficient.

Syntax:
```lua
int table.count( table list )
```

## `random` <Badge type="info" text="function" />
Returns a random value from the table.

Syntax:
```lua
mixed table.random( table list )
```