# Character
A character object in Ratchet represents an online player.

## Members
Characters have only one variable member, which is `ID` - this is the same number as *Character Unique ID* in the DevKit (see the image below) and also as the database ID.

It is also used in Tot scripts as a backend variable to represent players.
Therefore you can freely convert this number to a player and a player to this ID in Tot scripts.

And in Ratchet plugins you can also use [getPlayerFromID](#getplayerfromid) to create a character object from this ID,
which is the only way to construct a character object without retrieving it from events or from functions like [getPlayersInRadius](#getplayersinradius).

![Get Character ID](../images/characterid.png)

## `getPlayerFromID` <Badge type="info" text="function" />
Create a character object from the player's database ID.

Syntax:
```lua
Character|nil getPlayerFromID( int id )
```

Example:
```lua
local player = getPlayerFromID(301)
print(type(player))
```

## `getPlayerFromName` <Badge type="info" text="function" />
Find a player by their character's real name (this will ignore `/act` names and similar).

Syntax:
```lua
Character|nil getPlayerFromName( string name )
```

Example:
```lua
local player = getPlayerFromName("Bob")
print(type(player))
```

## `getPlayersInRadius` <Badge type="info" text="function" />
Returns a table with all players in radius of specified number of **tiles** from a vector position.

Syntax:
```lua
table<Character> getPlayersInRadius( Vector position, float radius )
```

Example:
```lua
-- all players in radius of 10 tiles from the caster
local players = getPlayersInRadius(caster:GetPosition(), 10)
```

## `getAllPlayers` <Badge type="info" text="function" />
Returns a table of all players online on the server.

Syntax:
```lua
table<Character> getAllPlayers()
```

## `getPlayerCount` <Badge type="info" text="function" />
Returns a number of online players on the server.

Syntax:
```lua
int getPlayerCount()
```


## `IsValid` <Badge type="info" text="function" />
Checks whether the character reference is still valid and the player is online.

Syntax:
```lua
bool Character:IsValid()
```

## `GetName` <Badge type="info" text="function" />
Returns a display name of a character. This will use `/act` name if applicable.

Syntax:
```lua
string Character:GetName()
```

Example:
```lua
local name = player:GetName()
print(name)
```

## `GetRealName` <Badge type="info" text="function" />
Returns the actual character name as it exists in the database (ignoring `/act` and similar).

Syntax:
```lua
string Character:GetRealName()
```

Example:
```lua
local name = player:GetRealName()
print(name)
```

## `GetSteamID` <Badge type="info" text="function" />
Returns SteamID64 (decimal), it is just a long number, but it is saved as a string.

Syntax:
```lua
string Character:GetSteamID()
```

Example:
```lua
local steamId = player:GetSteamID()
print(steamId)
```

## `GetGuildID` <Badge type="info" text="function" />
Returns the database ID of a clan the player is a member of.

Syntax:
```lua
int Character:GetGuildID()
```

Example:
```lua
local guildId = player:GetGuildID()
print(guildId)
```

## `GetGuild` <Badge type="info" text="function" />
Syntax:
```lua
Guild Character:GetGuild()
```

## `GetPosition` <Badge type="info" text="function" />
Returns a vector of the current coordinates of player's position in the game world.

Syntax:
```lua
Vector Character:GetPosition()
```

## `GetFeetPosition` <Badge type="info" text="function" />
Syntax:
```lua
Vector Character:GetFeetPosition()
```

Example:
```lua
local position = player:GetPosition()
print(position.x, position.y, position.z)
```

## `GetRotation` <Badge type="info" text="function" />
Syntax:
```lua
Rotator Character:GetRotation()
```

## `GetHeight` <Badge type="info" text="function" />
Syntax:
```lua
float Character:GetHeight()
```

## `GetHalfHeight` <Badge type="info" text="function" />
Syntax:
```lua
float Character:GetHalfHeight()
```

## `GiveItem` <Badge type="info" text="function" />
Syntax:
```lua
bool Character:GiveItem( int itemId [, int quantity = 1 ] )
```

## `Notify` <Badge type="info" text="function" />
Shows a HUD notification to a player.

Syntax:
```lua
void Character:Notify( string icon, string text [, Color iconColor ] )
```

Available icons:
<div class="table-list">
<div class="entry"><img class="ph-icon" alt="Asclepius" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/asclepius-fill.svg"/><span>Asclepius</span></div>
<div class="entry"><img class="ph-icon" alt="Axe" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/axe-fill.svg"/><span>Axe</span></div>
<div class="entry"><img class="ph-icon" alt="Bird" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/bird-fill.svg"/><span>Bird</span></div>
<div class="entry"><img class="ph-icon" alt="Book" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/book-fill.svg"/><span>Book</span></div>
<div class="entry"><img class="ph-icon" alt="Books" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/books-fill.svg"/><span>Books</span></div>
<div class="entry"><img class="ph-icon" alt="Calendar" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/calendar-dots-fill.svg"/><span>Calendar</span></div>
<div class="entry"><img class="ph-icon" alt="Campfire" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/campfire-fill.svg"/><span>Campfire</span></div>
<div class="entry"><img class="ph-icon" alt="Chat" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/chat-dots-fill.svg"/><span>Chat</span></div>
<div class="entry"><img class="ph-icon" alt="Check" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/check-fat-fill.svg"/><span>Check</span></div>
<div class="entry"><img class="ph-icon" alt="Clock" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/clock-fill.svg"/><span>Clock</span></div>
<div class="entry"><img class="ph-icon" alt="Coins" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/coins-fill.svg"/><span>Coins</span></div>
<div class="entry"><img class="ph-icon" alt="Confetti" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/confetti-fill.svg"/><span>Confetti</span></div>
<div class="entry"><img class="ph-icon" alt="Crown" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/crown-simple-fill.svg"/><span>Crown</span></div>
<div class="entry"><img class="ph-icon" alt="Door" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/door-open-fill.svg"/><span>Door</span></div>
<div class="entry"><img class="ph-icon" alt="Dress" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/dress-fill.svg"/><span>Dress</span></div>
<div class="entry"><img class="ph-icon" alt="Drink" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/champagne-fill.svg"/><span>Drink</span></div>
<div class="entry"><img class="ph-icon" alt="Drop" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/drop-fill.svg"/><span>Drop</span></div>
<div class="entry"><img class="ph-icon" alt="Envelope" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/envelope-simple-open-fill.svg"/><span>Envelope</span></div>
<div class="entry"><img class="ph-icon" alt="Error" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/x-circle-fill.svg"/><span>Error</span></div>
<div class="entry"><img class="ph-icon" alt="Fire" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/fire-fill.svg"/><span>Fire</span></div>
<div class="entry"><img class="ph-icon" alt="Fist" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/hand-fist-fill.svg"/><span>Fist</span></div>
<div class="entry"><img class="ph-icon" alt="Flag" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/flag-banner-fold-fill.svg"/><span>Flag</span></div>
<div class="entry"><img class="ph-icon" alt="Flask" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/flask-fill.svg"/><span>Flask</span></div>
<div class="entry"><img class="ph-icon" alt="Footprints" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/footprints-fill.svg"/><span>Footprints</span></div>
<div class="entry"><img class="ph-icon" alt="Hammer" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/hammer-fill.svg"/><span>Hammer</span></div>
<div class="entry"><img class="ph-icon" alt="Handshake" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/handshake-fill.svg"/><span>Handshake</span></div>
<div class="entry"><img class="ph-icon" alt="Happy" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/smiley-fill.svg"/><span>Happy</span></div>
<div class="entry"><img class="ph-icon" alt="Heal" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/first-aid-fill.svg"/><span>Heal</span></div>
<div class="entry"><img class="ph-icon" alt="Heart" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/heart-straight-fill.svg"/><span>Heart</span></div>
<div class="entry"><img class="ph-icon" alt="Hourglass" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/hourglass-high-fill.svg"/><span>Hourglass</span></div>
<div class="entry"><img class="ph-icon" alt="House" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/house-line-fill.svg"/><span>House</span></div>
<div class="entry"><img class="ph-icon" alt="Info" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/info-fill.svg"/><span>Info</span></div>
<div class="entry"><img class="ph-icon" alt="Key" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/key-fill.svg"/><span>Key</span></div>
<div class="entry"><img class="ph-icon" alt="Lightbulb" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/lightbulb-fill.svg"/><span>Lightbulb</span></div>
<div class="entry"><img class="ph-icon" alt="Moon" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/moon-fill.svg"/><span>Moon</span></div>
<div class="entry"><img class="ph-icon" alt="Neutral" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/smiley-meh-fill.svg"/><span>Neutral</span></div>
<div class="entry"><img class="ph-icon" alt="Package" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/package-fill.svg"/><span>Package</span></div>
<div class="entry"><img class="ph-icon" alt="Person" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/person-fill.svg"/><span>Person</span></div>
<div class="entry"><img class="ph-icon" alt="Plant" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/plant-fill.svg"/><span>Plant</span></div>
<div class="entry"><img class="ph-icon" alt="Puzzle" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/puzzle-piece-fill.svg"/><span>Puzzle</span></div>
<div class="entry"><img class="ph-icon" alt="Question" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/question-fill.svg"/><span>Question</span></div>
<div class="entry"><img class="ph-icon" alt="Sad" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/smiley-sad-fill.svg"/><span>Sad</span></div>
<div class="entry"><img class="ph-icon" alt="Scales" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/scales-fill.svg"/><span>Scales</span></div>
<div class="entry"><img class="ph-icon" alt="Shield" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/shield-fill.svg"/><span>Shield</span></div>
<div class="entry"><img class="ph-icon" alt="Skull" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/skull-fill.svg"/><span>Skull</span></div>
<div class="entry"><img class="ph-icon" alt="Sparkle" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/sparkle-fill.svg"/><span>Sparkle</span></div>
<div class="entry"><img class="ph-icon" alt="Star" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/star-fill.svg"/><span>Star</span></div>
<div class="entry"><img class="ph-icon" alt="Student" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/student-fill.svg"/><span>Student</span></div>
<div class="entry"><img class="ph-icon" alt="Sun" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/sun-fill.svg"/><span>Sun</span></div>
<div class="entry"><img class="ph-icon" alt="Sword" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/sword-fill.svg"/><span>Sword</span></div>
<div class="entry"><img class="ph-icon" alt="Tag" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/tag-fill.svg"/><span>Tag</span></div>
<div class="entry"><img class="ph-icon" alt="Tower" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/castle-turret-fill.svg"/><span>Tower</span></div>
<div class="entry"><img class="ph-icon" alt="Trophy" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/trophy-fill.svg"/><span>Trophy</span></div>
<div class="entry"><img class="ph-icon" alt="Wand" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/magic-wand-fill.svg"/><span>Wand</span></div>
<div class="entry"><img class="ph-icon" alt="Warning" src="https://raw.githubusercontent.com/phosphor-icons/core/refs/heads/main/assets/fill/warning-fill.svg"/><span>Warning</span></div>
</div>

<small>These beautiful icons come from [Phosphor Icons](https://phosphoricons.com/), permitted under MIT License.</small>

## `ExecuteConsoleCommand` <Badge type="info" text="function" />
Syntax:
```lua
void Character:ExecuteConsoleCommand( string command )
```

## `CallComponentFunction` <Badge type="info" text="function" />
Syntax:
```lua
void Character:CallComponentFunction( string componentName, string functionName )
```

## `IsStanding` <Badge type="info" text="function" />
Syntax:
```lua
bool Character:IsStanding()
```

## `IsWalking` <Badge type="info" text="function" />
Syntax:
```lua
bool Character:IsWalking()
```

## `IsRiding` <Badge type="info" text="function" />
Syntax:
```lua
bool Character:IsRiding()
```

## `IsArmed` <Badge type="info" text="function" />
Syntax:
```lua
bool Character:IsArmed()
```

## `Freeze` <Badge type="info" text="function" />
Freeze or unfreeze a player (restricting their movement).

Syntax:
```lua
void Character:Freeze( bool enable )
```

## `PlayVoice` <Badge type="info" text="function" />
Play a sound from the VoiceTable (such as `voc_pain` or `voc_jump`).

Syntax:
```lua
void Character:PlayVoice( string sound )
```

## `PlayAnimation` <Badge type="info" text="function" />
Play animation montage by path, such as:\
`/Game/Characters/humans/animations/emotes/AM_emote_greet_salute.AM_emote_greet_salute`

Syntax:
```lua
void Character:PlayAnimation( string path [, string startSection = "None", float playRate = 1.0 ] )
```

## `StopAnimation` <Badge type="info" text="function" />
Stop animation montage by path, or all animations if no path is specified

Syntax:
```lua
void Character:StopAnimation( [ string path = "" ] )
```