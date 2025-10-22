---
outline: deep
---

# Configuration 🔩
Ratchet is configured by editing the `config.json` file.

## Basic Configuration
For most cases it is recommended to simply use default settings.

You might want to change a path for plugins and packages.

Below is a minimal example of a config file.

::: code-group
```json [config.json]{2}
{
  "plugins": "C:/Ratchet/plugins",
  "packages": "C:/Users/USERNAME/AppData/Roaming/luarocks/share/lua/5.4/?.lua",
  "webserver": {
    "enabled": true,
    "port": 5460
  }
}
```
:::

## Advanced Configuration

Below is an example of a config file that contains all the options that can be changed.

::: code-group
```json [config.json]
{
  "plugins": "C:/Ratchet/plugins",
  "packages": "C:/Users/USERNAME/AppData/Roaming/luarocks/share/lua/5.4/?.lua",
  "msPerTick": 50,
  "webserver": {
    "enabled": true,
    "host": "0.0.0.0",
    "port": 5460,
    "logRequests": false
  },
  "database": {
    "enabled": true,
    "connectionTimeout": 500,
    "logQueries": false
  },
  "hooks": {
    "logHooks": false,
    "debugFocus": ""
  },
  "timers": {
    "enabled": true,
    "logTimers": false
  }
}
```
:::

### plugins
Path to plugins directory.

Default: `plugins`

### packages
Path to Lua packages used in `require` for [LuaRocks](https://luarocks.org/) support.

Default: &lt;empty string&gt;

### msPerTick
Amount of milliseconds in between each main loop tick. This is best left unchanged.

Default: `50`

### webserver

#### enabled
Enable web server.

Default: `false`

#### host
Binding host address for the web server. Default value of `0.0.0.0` allows any interface.

Default: `0.0.0.0`

#### port
Web server port.

Default: `5460`

#### logRequests
Print debug message with every REST API call.

Default: `false`

### database

#### enabled
This can be used to completely disable database thread in case you don't use database connections at all on your server.

Default: `true`

#### connectionTimeout
Connection timeout for `dbConnect` in milliseconds. This can be overriden per use case.

Default: `500`

#### logQueries
Print debug message with every SQL query.

Default: `false`

### hooks

#### logHooks
Log most game server actions. Enabling this can be very resource intensive and cause lags.

Default: `false`

#### debugFocus
A partial name of a class to focus on and log everything from. Previous setting has to be enabled for this to work.
Other hooks will be ignored and not logged.

Default: &lt;empty string&gt;

### timers

#### enabled
Enable timers, allowing them to tick.

Default: `true`

#### logTimers
Print debug message whenever timers are created, removed, or executed.

Default: `false`