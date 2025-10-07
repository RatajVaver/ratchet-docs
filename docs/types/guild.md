# Guild
A guild object in Ratchet represents a single guild/clan on the server.

## `getGuildFromID` <Badge type="info" text="function" />
Syntax:
```lua
Guild|nil getGuildFromID( int id )
```

## `getAllGuilds` <Badge type="info" text="function" />
Returns a table of all guilds on the server.

Syntax:
```lua
table<Guild> getAllGuilds()
```


## `GetID` <Badge type="info" text="function" />
Syntax:
```lua
int Guild:GetID()
```

## `GetName` <Badge type="info" text="function" />
Syntax:
```lua
string Guild:GetName()
```

## `GetMOTD` <Badge type="info" text="function" />
Syntax:
```lua
string Guild:GetMOTD()
```

## `GetOwner` <Badge type="info" text="function" />
Returns a database ID of the guild master player character.

Syntax:
```lua
int Guild:GetOwner()
```

## `GetMembers` <Badge type="info" text="function" />
Returns a table of names of all the members in a guild, indexed by their ID.

Syntax:
```lua
table<int, string> Guild:GetMembers()
```