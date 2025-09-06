# Tot ! Chat
This library will not function if your server doesn't have the [Tot ! Chat](https://steamcommunity.com/sharedfiles/filedetails/?id=2847709656) mod installed.

## `Alert` <Badge type="info" text="function" />

Syntax:
```lua
void TotChat.Alert( string message )
```

## `Broadcast` <Badge type="info" text="function" />

Syntax:
```lua
void TotChat.Broadcast( string message )
```

## `SendLocal` <Badge type="info" text="function" />

Syntax:
```lua
void TotChat.SendLocal( Character player, string message [, float distance = 10 ] )
```

## `SendMessage` <Badge type="info" text="function" />
Use this function if you want full control over the channels and chat tags.

This message will be displayed as sent by the specified player.

Refer to [Tot ! Chat API docs](https://apiconan.totchinuko.fr/#/chat?id=tot_s_chatmessage) for more details.

Syntax:
```lua
void TotChat.SendMessage( Character player, string emitterName, int channelId, table<string> tags, string language, string message, float distance )
```

## `ReceiveMessage` <Badge type="info" text="function" />
Use this function if you want full control over the channels and chat tags.

This message will be displayed only to the specified player.

Refer to [Tot ! Chat API docs](https://apiconan.totchinuko.fr/#/chat?id=tot_s_chatmessage) for more details.

Syntax:
```lua
void TotChat.ReceiveMessage( Character player, string emitterName, int channelId, table<string> tags, string language, string message, float distance )
```

## `Notify` <Badge type="info" text="function" />

Syntax:
```lua
void TotChat.Notify( Character player, string message )
```

## `NotifyLocal` <Badge type="info" text="function" />

Syntax:
```lua
void TotChat.NotifyLocal( Character player, string message )
```

## `Warn` <Badge type="info" text="function" />

Syntax:
```lua
void TotChat.Warn( Character player, string message )
```