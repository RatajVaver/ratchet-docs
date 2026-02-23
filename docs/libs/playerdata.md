# Player Data
Every character can have some permanent data stored in an efficient key-value storage, which is always loaded in memory when the player is online, and otherwise saved in `ratchet/storage.db` SQLite file.

These functions can also be used directly on the [Character](/types/character#player-data) object when online.

## `Set` <Badge type="info" text="function" />
Syntax:
```lua
void PlayerData.Set( int ID, string key, string|number|bool value )
```

## `Get` <Badge type="info" text="function" />
Syntax:
```lua
string|number|bool PlayerData.Get( int ID, string key )
```

## `GetAll` <Badge type="info" text="function" />
Syntax:
```lua
table PlayerData.GetAll( int ID )
```

## `Has` <Badge type="info" text="function" />
Syntax:
```lua
bool PlayerData.Has( int ID, string key )
```

## `Delete` <Badge type="info" text="function" />
Syntax:
```lua
void PlayerData.Delete( int ID, string key )
```

## `DeleteAll` <Badge type="info" text="function" />
Syntax:
```lua
void PlayerData.DeleteAll( int ID )
```