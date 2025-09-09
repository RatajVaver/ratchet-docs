# Web Server 📮

Ratchet also runs a tiny internal web server to listen for HTTP requests.

Therefore, you can use it as a REST API to communicate with Ratchet.

Be it for controlling plugins or calling events.

By default, web server is accessible on: `http://localhost:5460`

::: warning
Make sure the web server's port is not publicly accessible from the internet, as that would allow malicious actors to disable your plugins remotely.
:::

## Plugin Management

### `/plugins` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Returns a JSON formatted list of all available plugins.

```
http://localhost:5460/plugins
```

### `/reloadall` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
```
http://localhost:5460/reloadall
```

### `/reload` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
```
http://localhost:5460/reload?plugin=myfirstplugin
```

### `/unload` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
```
http://localhost:5460/unload?plugin=myfirstplugin
```

### `/watch` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
```
http://localhost:5460/watch?plugin=myfirstplugin
```

### `/refresh-schedule` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
```
http://localhost:5460/refresh-schedule
```

### `/refresh-plugins` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
```
http://localhost:5460/refresh-plugins
```

## Events

### `/event` <Badge type="tip" text="POST" /> <Badge type="info" text="API endpoint" />
```
http://localhost:5460/event
```

Example:
```bat
curl -d "event=onTestEvent" -X POST http://localhost:5460/event
```

## Custom API
You can create a file called `restapi.lua` in your root plugins folder to make use of built-in web server and create your own REST API that can communicate with your Ratchet plugins.

Functions will be called by their name and any output will be passed back to the caller as a JSON response.
Restarts are not needed, the file is executed anew with every request.

::: warning
Do not declare any global variables in this file, as it may have unforeseen effects.
:::

Example:
```lua
local Router = {}

function Router.Announcement(data)
    local message = data.msg
    if(message)then
        TotChat.Broadcast(message)
        return { status = "OK" }
    end
    return { status = "FAIL", reason = "No message provided" }
end

return Router
```

### `/call` <Badge type="tip" text="POST" /> <Badge type="info" text="API endpoint" />
```
http://localhost:5460/call/:function
```

Any parameters can be attached with this request and they will be present as a Lua table input in the callback function.

Example:
```bat
curl -d "msg=Hello world" -X POST http://localhost:5460/call/Announcement
```