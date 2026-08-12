# Extensions 🧬

Extensions are code modules (`.dll` on Windows, `.so` on Linux) that Ratchet loads directly into its own process at startup, before any plugins are loaded.

Unlike plugins, which are written in Lua, extensions are compiled **C/C++** code. They exist to enable functionality that Lua and the built-in libraries can't provide, such as creating interface for third-party software, doing heavy computations, interacting with other machines, or the operating system directly.

::: danger
**Only install extensions you trust!**

Extensions run as native code on your machine with the same privileges as Ratchet and the game process itself.
There is no sandbox, no security measures, no guard rails. You are on your own.

A malicious extension could fully compromise the machine it runs on.

Similarly, extension containing bugs can very easily crash your server or break it entirely.
:::

## Using Extensions

1. Make sure extensions are enabled in your [`config.json`](/config#extensions) (enabled by default).
2. Drop the compiled extension file into the extensions directory. By default this is `ratchet/extensions`, but the path can be changed in the config.
3. Restart the server. Extensions are loaded once at startup, before any plugins.
4. Verify your extension loaded. Each successfully loaded extension prints its name and version to the console as it's loaded by Ratchet.
5. Now you can use the expanded functionality in your plugins.

## Developing Extensions

Visit the GitHub repository for [Ratchet Extensions](https://github.com/RatajVaver/ratchet-extensions) to get started.
There, you will find the header file and some example extensions.

Every extension module must export a function with this signature:

```cpp
RATCHET_EXTENSION_EXPORT void RatchetRegister(const RatchetAPI* api);
```

Ratchet will call it once at startup and hand it a `RatchetAPI` struct:

```cpp
struct RatchetAPI {
    int api_version;
    lua_State* L;

    void (*register_ext)(const char* name, const char* version);

    void (*log_info)(const char* msg);
    void (*log_warning)(const char* msg);
    void (*log_error)(const char* msg);
};
```

A minimal extension that registers a native function into Lua looks like this:

```cpp
#include "RatchetExtension.h"

static int HelloWorld(lua_State* L) {
    lua_pushstring(L, "Hello from my extension!");
    return 1;
}

RATCHET_EXTENSION_EXPORT void RatchetRegister(RatchetAPI* api) {
    api->register_ext("Hello", "1.0.0");

    lua_State* L = api->L;
    lua_register(L, "helloWorld", HelloWorld);
}
```

### Disclaimers
- Call `api->register_ext("MyExt", "1.0.0")` before using `api->L` or any log functions.
- **DO NOT** store `api->L`, it shall not be used outside of Lua callbacks.
- Link against Ratchet's own Lua library build (lua55.dll / liblua55.so).
- Keep in mind that introducing any faulty code will crash the server.