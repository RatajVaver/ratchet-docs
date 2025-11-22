# Web Server 📮

Ratchet also runs a tiny internal web server to listen for HTTP requests.

Therefore, you can use it as a REST API to communicate with Ratchet.

Be it for controlling plugins or calling events.

By default, web server is accessible on: `http://localhost:5460`

Port can be changed in the [configuration](/config) file.

::: danger
Make sure the web server's port is **NOT** publicly accessible from the internet, as that would allow malicious actors to disable your plugins remotely.
:::

## Plugin Management

### `/plugins` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Returns a JSON formatted list of all available plugins.

```
http://localhost:5460/plugins
```

### `/reloadall` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Unload all running plugins and load those listed in `plugins.txt` file.

```
http://localhost:5460/reloadall
```

### `/reload` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Load (enable) or reload a plugin (if it's already running).

```
http://localhost:5460/reload?plugin=myfirstplugin
```

### `/unload` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Unload (disable) a plugin.

```
http://localhost:5460/unload?plugin=myfirstplugin
```

### `/watch` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Activate [hot reload](/hot-reload) for a plugin.

```
http://localhost:5460/watch?plugin=myfirstplugin
```

### `/refresh-schedule` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Refresh [scheduler](/scheduler) to apply new planned events.

```
http://localhost:5460/refresh-schedule
```

### `/refresh-plugins` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Refresh the list of plugins (after adding or removing a plugin).

```
http://localhost:5460/refresh-plugins
```

## Logs

### `/logs` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Read the current Ratchet console log. Last 20 lines will be displayed by default. This can be changed with `n` parameter.

```
http://localhost:5460/logs?n=20
```

## Debugging

### `/debug` <Badge type="tip" text="GET" /> <Badge type="info" text="API endpoint" />
Change the setting of [debugFocus](/config#debugfocus) during runtime.

```
http://localhost:5460/debug/:focus
```

Focus value can be empty to disable logging of hooks completely, or `*` to enable it for all (this is resource intensive and should be used sparsely).

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