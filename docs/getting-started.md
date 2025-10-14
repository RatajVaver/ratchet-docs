# Getting Started 🎬

Ratchet is a script extender that enables modders and server admins to create server-side mods called plugins using [Lua](https://lua.org/about.html) scripting language.

Players don't have to install these plugins, neither do they have to install Ratchet itself, everything lives on the server and can be changed at runtime.

::: warning
Ratchet is still in development and not yet publicly available for download!
:::

## Installing Ratchet

Ratchet has to be installed in the `ConanSandbox\Binaries\Win64` directory of the dedicated server.
From there it will be automatically loaded whenever server is started.

Configuration file named `config.json` has to sit in a `ratchet` sub-directory. It will tell Ratchet where to look for plugins (and packages).

By default, they are located in `ConanSandbox\Binaries\Win64\plugins` but this can be changed in the [configuration](/config) file.

### Workshop Mod

For Ratchet to function, you also need to add the Workshop mod to your mod list.

It is recommended to put Ratchet at the very bottom of the mod order or as near to it as possible to avoid overwriting interface API and other unforeseen issues.

<div class="steam-widget">
    <img src="https://images.steamusercontent.com/ugc/11127608332628097490/9BB730F7AFC59A7E8CE75EFDF6396DABEF6DD74F/?imw=200&amp;imh=200" alt="Ratchet">
    <div>
        <a class="title" href="https://steamcommunity.com/sharedfiles/filedetails/?id=3578032598" title="Ratchet" target="_blank" rel="noreferrer">Ratchet</a>
        <p>Ratchet is a script extender that enables modders and server admins to create server-side mods called plugins using Lua scripting language.</p>
        <a class="button" href="https://steamcommunity.com/sharedfiles/filedetails/?id=3578032598" target="_blank" rel="noreferrer">Steam Workshop</a>
    </div>
</div>

## Installing plugins

Plugins are folders of Lua files. They always have to contain `main.lua` to be recognized by Ratchet as plugins. That file is also automatically executed whenever the plugin is loaded.

Official and community made plugins that are available as open-source projects for everyone to use can be found at: https://github.com/RatajVaver/ratchet-plugins

These plugins also serve as examples to learn from, if you wish to create your own plugins.

Once you downloaded or created some plugins, you can load them using in-game command: `/ratchet load myfirstplugin` or with [plugin manager](/plugin-manager) in Sudo admin panel.

You can also load them using HTTP request, directing your browser to `localhost:5460/reload?plugin=myfirstplugin` on the server machine or using that as an API.

Better yet, you can have plugins load on server startup by creating `plugins.txt` file in the root plugins directory and listing a name of plugin to load on each line.

::: code-group
```[plugins.txt]
myfirstplugin
community/chess
community/storage
deeply/closeted/gay/plugin
discord-webhooks
```
:::

::: tip
Plugins can live in subfolders but it is generally good idea to not go too crazy with the structure.
Use first level to organize plugins into categories or groups if you have too many of them.
:::

::: warning
Even though you can create plugins in subfolders, they should have unique names.
Do not create plugins of a same name in different folders, as that could cause issues.
:::

## Global code

You can create a file named `global.lua` in your root plugins directory.

This file will be executed once with server startup before loading plugins.

::: warning
Be careful with this file, as anything you declare in it will be shared with every plugin!
:::

## Secrets

You can store all your passwords, tokens, webhook URLs and similar *"secrets"* in a `ratchet/secrets.txt` file.
Every secret has a key, which is then used in the `getSecret` function to retrieve it.
This way your `plugins` folder can be a Git repository without having passwords in plain sight.

::: code-group
```[secrets.txt]
dbpass=123isAweakPassw0rd
api_key=49n87zt48to43k
discord_webhook=http://whatever
```
:::

::: warning
Note that this doesn't protect or encrypt your secrets in any way and malicious code could easily steal it anyway.
It's a plain text file, it can be read by anyone with access to your server or plugins.
:::