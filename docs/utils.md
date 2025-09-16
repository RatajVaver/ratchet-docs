# Utilities
This page documents miscellaneous functions that don't belong to any library.

## `getType` <Badge type="info" text="function" />
Returns the name of an object type for a specific object.

Syntax:
```lua
string getType( mixed object )
```

## `base64Encode` <Badge type="info" text="function" />
Syntax:
```lua
string base64Encode( string input )
```

## `base64Decode` <Badge type="info" text="function" />
Syntax:
```lua
string base64Decode( string input )
```

## `friendlyTime` <Badge type="info" text="function" />
Converts number of seconds into human-friendly and readable format.

Syntax:
```lua
string friendlyTime( int seconds )
```

Example:
```lua
local time = friendlyTime(3600)
print(time) -- "1 hour"
```

## `printInfo` <Badge type="info" text="function" />
Same as the native `print` function, except for prepending plugin name and highlighting the message with **blue** color in the Ratchet console.
This message will also be saved to the `ratchet.log` file located in the server's folder.

Syntax:
```lua
void printInfo( [ string input, ... ] )
```

## `printSuccess` <Badge type="info" text="function" />
Same as the native `print` function, except for prepending plugin name and highlighting the message with **green** color in the Ratchet console.
This message will also be saved to the `ratchet.log` file located in the server's folder.

Syntax:
```lua
void printSuccess( [ string input, ... ] )
```

## `printWarning` <Badge type="info" text="function" />
Same as the native `print` function, except for prepending plugin name and highlighting the message with **gold** color in the Ratchet console.
This message will also be saved to the `ratchet.log` file located in the server's folder.

Syntax:
```lua
void printWarning( [ string input, ... ] )
```

## `printError` <Badge type="info" text="function" />
Same as the native `print` function, except for prepending plugin name and highlighting the message with **red** color in the Ratchet console.
This message will also be saved to the `ratchet.log` file located in the server's folder.

Syntax:
```lua
void printError( [ string input, ... ] )
```