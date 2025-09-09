# Variables

This is a list of pre-defined variables that can be used in any plugin.

::: danger CAUTION
Do not replace any of these variables (or any library or function names used in Ratchet) as that could lead to unexpected behavior and break other plugins or even crash the server.
:::

## Global
- **START_TIME** - Unix timestamp (UTC) of the time when server was last started
- **PLUGINS_PATH** - Path to the root plugins directory

## Plugin specific
- **PLUGIN_NAME** - Name of the plugin (name of the directory)
- **PLUGIN_PATH** - Path to the plugin directory relative to root plugins directory
- **PLUGIN_REALPATH** - Absolute path to the plugin directory
- **PLUGIN_START** - Unix timestamp (UTC) of the time when plugin was (re)started

## Protected keywords
Additionally, make sure to not name your own variables any of these protected names:
- exports
- [any library or function name](/functions)
- [any object name](/objects)