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
curl -d "event=onTestEvent" -X POST http://localhost:5460/event
```