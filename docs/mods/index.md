# Mod compatibility

In theory, Ratchet can communicate with all the game functions and all other mods.
However, support for these functions has to be implemented into Ratchet.

I've already implemented support for some of the most popular mods.

**Currently supported mods are:**
- [Tot ! Chat](/mods/totchat)
- [Tot ! Sudo](/mods/totsudo)
- [Tot ! Admin](/mods/totadmin)
- [Tot ! Custom](/mods/totcustom)
- [Roleplay Redux](/mods/redux)
- [Knight's Sanity](/mods/knights-sanity)
- [Devious Desires](/mods/devious-desires)

Would you like to suggest compatibility with another popular mod? \
Let me know about your idea on my [Discord](https://discord.gg/3WJNxCTn8m).

## Your own mod
You can use Ratchet interface API to [trigger events and receive updates](/events#trigger-from-devkit) in your own mod.

[Download interface API](https://ratajmods.net/assets/files/Ratchet-devkit.zip)

Extract Ratchet folder found in this zip file into `ConanExilesDevKit\Games\ConanSandbox\Content\ModsShared`

You can then reference the interfaces in DevKit just like with any other mod API.