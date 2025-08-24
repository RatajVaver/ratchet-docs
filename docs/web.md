# Web
This library allows Ratchet to communicate with websites using HTTP protocol.
It can use both GET and POST requests and retrieve a response from both.
Sending POST data can be done both via string (URL encoded form format) or Lua table that is internally automatically converted to JSON and correct HTTP headers are used.

## `Get` <Badge type="info" text="function" />
Sends a HTTP GET request.

Syntax:
```lua
void Web.Get( string url [, function ( bool success, int status, string response ) ] )
```

Example:
```lua {1}
Web.Get("https://pokeapi.co/api/v2/pokemon/eevee", function(success, status, body)
    if success then
        local data = JSON.parse(body)
        if(data and data.sprites)then
            local image = data.sprites.other["official-artwork"]["front_default"]
            print(image)
        end
    end
end)
```

## `Post` <Badge type="info" text="function" />
Sends a HTTP POST request.

Syntax:
```lua
void Web.Post( string url, string|table data [, function ( bool success, int status, string response ) ] )
```

Example:
```lua {1}
Web.Post("https://lichess.org/api/challenge/open", "name=Conan Exiles Chess Match", function(success, status, body)
    if(success)then
        local data = JSON.parse(body)
        if(data and data.url)then
            print(data.url)
        end
    end
end)
```