# Files
While loading a plugin only executes a `main.lua` file, additional files can be loaded and it is generally very good idea to structure your code into multiple files.

## `fileExists` <Badge type="info" text="function" />
Checks whether a file exists by relative path from the Lua file.

Syntax:
```lua
bool fileExists( string path )
```

Example:
```lua
if(fileExists("other.lua"))then
    print("It exists!")
end
```

## `getFilePath` <Badge type="info" text="function" />
Returns path of the current file relative to the specific plugin's folder.

Syntax:
```lua
string getFilePath()
```

Example:
```lua
print(getFilePath()) -- "main.lua"
```

## `include` <Badge type="info" text="function" />
Loads additional Lua file by relative path.
Table can be returned from the other script to serve as a module. Inheritance will also work.

This can also be used inside a function for asynchronous load of code, which allows for custom hot loading of various parts of code.

Syntax:
```lua
mixed include( string path )
```

Example:
```lua
local module = include("other.lua")
```