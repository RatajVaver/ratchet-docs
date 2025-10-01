# Hot Reload 🔥

When Hot Reload functionality is enabled on a plugin (sometimes referred to as watch), Ratchet will watch the plugin's directory for any file changes.
Whenever you save, rename, or remove a `.lua` file within the directory, the plugin will be reloaded.
This makes developing plugins much faster and arguably even more fun.

To enable Hot Reload, use the [Plugin Manager](/plugin-manager) or type `/ratchet watch myfirstplugin`

You can also enable it using [Web Server](/web-server) API call (watch).