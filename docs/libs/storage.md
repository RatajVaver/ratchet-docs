# Storage
With Storage library, we can store permanent data in an efficient key-value storage, which is loaded in memory on demand, and otherwise saved in `ratchet/storage.db` SQLite file.

This works just like [PlayerData](/libs/playerdata), but is mapped to virtual objects by namespace and ID.

## `Set` <Badge type="info" text="function" />
Syntax:
```lua
void Storage.Set( string namespace, int ID, string key, string|number|bool|table value )
```

## `Get` <Badge type="info" text="function" />
Syntax:
```lua
string|number|bool|table Storage.Get( string namespace, int ID, string key )
```

## `GetAll` <Badge type="info" text="function" />
Syntax:
```lua
table Storage.GetAll( string namespace, int ID )
```

## `Has` <Badge type="info" text="function" />
Syntax:
```lua
bool Storage.Has( string namespace, int ID, string key )
```

## `Delete` <Badge type="info" text="function" />
Syntax:
```lua
void Storage.Delete( string namespace, int ID, string key )
```

## `DeleteAll` <Badge type="info" text="function" />
Syntax:
```lua
void Storage.DeleteAll( string namespace, int ID )
```