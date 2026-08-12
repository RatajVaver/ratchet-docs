# Mod compatibility

In theory, Ratchet can communicate with all the game functions and all other mods.
However, support for these functions has to be implemented into Ratchet.

I've already implemented support for some of the most popular mods.

**Currently supported mods are:**
- [Tot ! Chat](/mods/totchat) <Badge type="warning" text="Legacy" />
- [Tot ! Chat V2](/mods/totchatv2) <Badge type="tip" text="Enhanced" />
- [Tot ! Sudo](/mods/totsudo) <Badge type="warning" text="Legacy" /> + <Badge type="tip" text="Enhanced" />
- [Tot ! Admin](/mods/totadmin) <Badge type="warning" text="Legacy" /> + <Badge type="tip" text="Enhanced" />
- [Tot ! Custom](/mods/totcustom) <Badge type="warning" text="Legacy" /> + <Badge type="tip" text="Enhanced" />
- [Roleplay Redux](/mods/redux) <Badge type="warning" text="Legacy" /> + <Badge type="tip" text="Enhanced" />
- [Roleplay Enhanced](/mods/rp2) <Badge type="tip" text="Enhanced" />
- [Knight's Sanity](/mods/knights-sanity) <Badge type="warning" text="Legacy" /> + <Badge type="tip" text="Enhanced" />
- [Devious Desires](/mods/devious-desires) <Badge type="warning" text="Legacy" /> + <Badge type="tip" text="Enhanced" />
- [RIFT](/mods/rift) <Badge type="tip" text="Enhanced" />

Would you like to suggest compatibility with another popular mod? \
Let me know about your idea on my [Discord](https://discord.gg/3WJNxCTn8m).

## Your own mod
You can use Ratchet interface API to [trigger events and receive updates](/events#trigger-from-devkit) in your own mod.

[Download interface API for Legacy](https://ratajmods.net/assets/files/Ratchet-devkit.zip)

Extract Ratchet folder found in this zip file into `ConanExilesDevKit\Games\ConanSandbox\Content\ModsShared`

You can then reference the interfaces in DevKit just like with any other mod API.