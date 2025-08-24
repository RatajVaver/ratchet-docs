# Exports
Exports are a functionality of Ratchet that allows you to export a function from one plugin to use it in another and get returned data.

### `export` <Badge type="info" text="function" />
Exports a function, allowing it to be called from other plugins.
You can use arguments and outputs as if using a normal function.

Syntax:
```lua
bool export( string name, function func )
```

Example:
```lua {4,6}
function helloWorld()
    print("Hello world")
end
export("hello", helloWorld)

exports.test.hello()
```

::: info
If the plugin name contains any non-alphanumeric symbols, you'll have to use it like this:

`exports['plugin-name'].functionName(argument)`
:::