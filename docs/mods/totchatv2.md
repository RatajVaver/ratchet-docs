# Tot ! Chat V2 <Badge type="tip" text="Enhanced" />
This library will not function if your server doesn't have the [Tot ! Chat](https://steamcommunity.com/sharedfiles/filedetails/?id=3728208565) mod installed.

::: warning
The functions outlined on this page will only function on Conan Exiles **Enhanced**.

For **Legacy** version, see [Tot ! Chat](/mods/totchat).
:::

## Headers
Some functions accept an optional `headers` table.

For the full list of options, please refer to [Tot API docs](https://apiconan.totchinuko.fr/#/chat.enhanced?id=message-headers).

## `GetGlobalChannelId` <Badge type="info" text="function" />
Returns the ID of the server's main global channel.

Syntax:
```lua
int TotChat.GetGlobalChannelId()
```

## `GetLocalChannelId` <Badge type="info" text="function" />
Returns the ID of the server's main local channel.

Syntax:
```lua
int TotChat.GetLocalChannelId()
```

## `SendLocal` <Badge type="info" text="function" />
Sends a message as a player into the main local channel.

Syntax:
```lua
void TotChat.SendLocal( Character player, string message [, table headers ] )
```

## `SendGlobal` <Badge type="info" text="function" />
Sends a message as a player into the main global channel.

Syntax:
```lua
void TotChat.SendGlobal( Character player, string message [, table headers ] )
```

## `Broadcast` <Badge type="info" text="function" />
Sends a server notification (not tied to any player) into a channel.

Syntax:
```lua
void TotChat.Broadcast( int channelId, string message [, string level = "Info" ] )
```

Level controls the notification style and can be any of: Info, Warning, Error, Success.

## `Notify` <Badge type="info" text="function" />
Sends a notification to a single player, in the context of a channel.

Syntax:
```lua
void TotChat.Notify( Character player, int channelId, string message [, string level = "Info" ] )
```

Level controls the notification style and can be any of: Info, Warning, Error, Success.

## `Send` <Badge type="info" text="function" />
Sends a message as a player into any channel by ID.

Syntax:
```lua
void TotChat.Send( Character player, int channelId, string message [, table headers ] )
```

## `SendInRadius` <Badge type="info" text="function" />
Sends a message into a channel, but only to players within a radius of a position.

Syntax:
```lua
void TotChat.SendInRadius( Vector position, float radius, int channelId, string message [, table headers ] )
```

## `GetPlayerLanguages` <Badge type="info" text="function" />
Syntax:
```lua
table TotChat.GetPlayerLanguages( Character player )
```

| Field | Type |
|-|-|
| `guid` | [GUID](/objects#guid) |
| `knowledge` | number |

## `SetPlayerLanguage` <Badge type="info" text="function" />
Syntax:
```lua
void TotChat.SetPlayerLanguage( Character player, GUID language, float knowledge )
```

## `RemovePlayerLanguage` <Badge type="info" text="function" />
Syntax:
```lua
void TotChat.RemovePlayerLanguage( Character player, GUID language )
```

## `GetServerLanguages` <Badge type="info" text="function" />
Returns a list of all languages configured on the server.

Syntax:
```lua
table TotChat.GetServerLanguages()
```

| Field | Type |
|-|-|
| `guid` | [GUID](/objects#guid) |
| `name` | string |
| `adminOnly` | boolean |
| `universal` | boolean |
| `startingKnowledge` | number |

## `GetServerRanges` <Badge type="info" text="function" />
Returns a list of all chat ranges configured on the server.

Syntax:
```lua
table TotChat.GetServerRanges()
```

| Field | Type |
|-|-|
| `guid` | [GUID](/objects#guid) |
| `name` | string |
| `range` | number |
| `eavesdrop` | number |
| `color` | [Color](/objects#color) |
