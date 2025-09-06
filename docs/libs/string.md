# String Extensions
Ratchet expands on the [standard string library](https://www.lua.org/manual/5.1/manual.html#5.4) to give you a few more functions for convenience.
All standard Lua functions are available as well and not listed on this page.

Just like with standard functions, you can use semicolon to call any of these functions on an existing string and use it as the input.

## `explode` <Badge type="info" text="function" />
Splits a string up wherever it finds the given separator.

Syntax:
```lua
table<string> string.explode( string input, string delimiter )
```

Example:
```lua
local hello = "Hello world!"
print(hello:explode(" ")[1]) -- "Hello"
```

## `split` <Badge type="info" text="function" />
Split is just an alias for [explode](#explode) and works exactly the same.

Syntax:
```lua
table<string> string.split( string input, string delimiter )
```

## `startsWith` <Badge type="info" text="function" />
Checks whether a string starts with the specified prefix or not.

Syntax:
```lua
bool string.startsWith( string input, string prefix )
```

## `endsWith` <Badge type="info" text="function" />
Checks whether a string ends with the specified suffix or not.

Syntax:
```lua
bool string.endsWith( string input, string suffix )
```

## `trimLeft` <Badge type="info" text="function" />
Removes all whitespace characters from the left side of a string.

Syntax:
```lua
string string.trimLeft( string input )
```

## `trimRight` <Badge type="info" text="function" />
Removes all whitespace characters from the right side of a string.

Syntax:
```lua
string string.trimRight( string input )
```

## `trim` <Badge type="info" text="function" />
Removes all whitespace characters surrounding a string.

Syntax:
```lua
string string.trim( string input )
```

## `join` <Badge type="info" text="function" />
Given a table of strings, it will glue it together with a specified separator.
This is essentially the same thing as `table.concat` and also the opposite of [explode](#explode) and [split](#split).

Syntax:
```lua
string string.join( table<string> parts, string delimiter )
```

## `padLeft` <Badge type="info" text="function" />
Adds a padding character specified amount of times to the left side of a string.

Syntax:
```lua
string string.padLeft( string input, int length, string pad )
```

## `padRight` <Badge type="info" text="function" />
Adds a padding character specified amount of times to the right side of a string.

Syntax:
```lua
string string.padRight( string input, int length, string pad )
```

## `isEmpty` <Badge type="info" text="function" />
Checks whether the string contains nothing or only contains whitespace characters.

Syntax:
```lua
bool string.isEmpty( string input )
```

## `isAlpha` <Badge type="info" text="function" />
Checks whether the string only contains letters of the English alphabet.

Syntax:
```lua
bool string.isAlpha( string input )
```

## `isNumeric` <Badge type="info" text="function" />
Checks whether the string only contains numbers.

Syntax:
```lua
bool string.isNumeric( string input )
```

## `isAlphaNumeric` <Badge type="info" text="function" />
Checks whether the string only contains letters and numbers.

Syntax:
```lua
bool string.isAlphaNumeric( string input )
```

## `count` <Badge type="info" text="function" />
Searches for a substring in the input string and counts its occurances.

Syntax:
```lua
int string.count( string input, string substring )
```

## `capitalize` <Badge type="info" text="function" />
Makes first letter of every word uppercase while making everything else lowercase.

Syntax:
```lua
string string.capitalize( string input )
```

## `levenshtein` <Badge type="info" text="function" />
Calculates the [Levenshtein distance](https://en.wikipedia.org/wiki/Levenshtein_distance) of two strings.
This is useful to find similar strings.

Syntax:
```lua
string string.levenshtein( string first, string second )
```

## `removePrefix` <Badge type="info" text="function" />
Removes a prefix from the beginning of the input string as long as it starts with that prefix.

Syntax:
```lua
string string.removePrefix( string input, string prefix )
```

## `removeSuffix` <Badge type="info" text="function" />
Removes a suffix from the end of the input string as long as it ends with that suffix.

Syntax:
```lua
string string.removeSuffix( string input, string suffix )
```

## `slugify` <Badge type="info" text="function" />
Converts a string into a slug (text that can be safely used in URL or as a file name).

Syntax:
```lua
string string.slugify( string input )
```

Example:
```lua
local slug = string.slugify("Hello world!")
print(slug) -- "hello-world"
```

## `random` <Badge type="info" text="function" />
Generates a random string of specified length. You can also specify characters it should use.
By default, all numbers and all lowercase and uppercase letters of English alphabet are used.

Syntax:
```lua
string string.random( int length [, string charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789" ] )
```

::: warning
This random generator **DOES NOT** generate cryptographically secure values, **DO NOT** use it for sensitive cryptographic purposes, or purposes that require returned values to be unguessable.
:::