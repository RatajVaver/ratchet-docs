# JSON
The ability to save and load [JSON](https://en.wikipedia.org/wiki/JSON) files is essential part of Ratchet.

## `save` <Badge type="info" text="function" />
Syntax:
```lua
bool JSON.save( string path, table data )
```

Example:
```lua
JSON.save("data/test.json", { message = "Hello world!" })
```

## `load` <Badge type="info" text="function" />
Syntax:
```lua
table|nil JSON.load( string path )
```

Example:
```lua
local data = JSON.load("data/test.json")
print(data.message)
```

## `stringify` <Badge type="info" text="function" />
Syntax:
```lua
string JSON.stringify( table data )
```

Example:
```lua
local text = JSON.stringify({ message = "Hello world!" })
print(text)
```

## `parse` <Badge type="info" text="function" />
Syntax:
```lua
table JSON.parse( string json )
```

Example:
```lua
local data = JSON.parse('{ "message": "Hello world!" }')
print(data.message)
```