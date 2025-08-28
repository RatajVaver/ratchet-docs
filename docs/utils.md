# Utilities
This page documents miscellaneous functions that don't belong to any library.

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