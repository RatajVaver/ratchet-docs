# Functions

This is a list of all functions provided by Ratchet, except for object methods that are not listed here but on the [objects](/objects) page.
You can also use any [Lua functions](https://www.lua.org/manual/5.1/) provided by the standard libraries.

## Global
- [fileExists](/files#fileexists)
- [include](/files#include)
- [export](/exports#export)
- [getPlayerFromID](/characters#getplayerfromid)
- [getPlayerFromName](/characters#getplayerfromname)
- [getPlayersInRadius](/characters#getplayersinradius)
- [getAllPlayers](/characters#getallplayers)
- [getPlayerCount](/characters#getplayercount)
- [dbConnect](/database#dbconnect)
- [setTimer](/timers#settimer)
- [killTimer](/timers#killtimer)
- [on](/events#on)
- [off](/events#off)
- [once](/events#once)
- [emit](/events#emit)
- [base64Encode](/utils#base64Encode)
- [base64Decode](/utils#base64Decode)
- [friendlyTime](/utils#friendlyTime)

## string
- [explode](/string#explode)
- [split](/string#split)
- [startsWith](/string#startsWith)
- [endsWith](/string#endsWith)
- [trimLeft](/string#trimLeft)
- [trimRight](/string#trimRight)
- [trim](/string#trim)
- [join](/string#join)
- [padLeft](/string#padLeft)
- [padRight](/string#padRight)
- [isEmpty](/string#isEmpty)
- [isAlpha](/string#isAlpha)
- [isNumeric](/string#isNumeric)
- [isAlphaNumeric](/string#isAlphaNumeric)
- [count](/string#count)
- [capitalize](/string#capitalize)
- [levenshtein](/string#levenshtein)
- [removePrefix](/string#removePrefix)
- [removeSuffix](/string#removeSuffix)
- [random](/string#random)

## math
- [round](/math#round)
- [clamp](/math#clamp)
- [lerp](/math#lerp)

## table
- [copy](/table#copy)
- [merge](/table#merge)

## Dice
- [Dice.Roll](/dice#roll)
- [Dice.D4](/dice#aliases)
- [Dice.D6](/dice#aliases)
- [Dice.D8](/dice#aliases)
- [Dice.D10](/dice#aliases)
- [Dice.D12](/dice#aliases)
- [Dice.D20](/dice#aliases)

# Web
- [Web.Get](/web#get)
- [Web.Post](/web#post)

## JSON
- [JSON.load](/json#load)
- [JSON.save](/json#save)
- [JSON.parse](/json#parse)
- [JSON.stringify](/json#stringify)

## Tot ! Chat
- [TotChat.Alert](/totchat#alert)
- [TotChat.Broadcast](/totchat#broadcast)
- [TotChat.SendLocal](/totchat#sendlocal)
- [TotChat.Notify](/totchat#notify)
- [TotChat.NotifyLocal](/totchat#notifylocal)
- [TotChat.Warn](/totchat#warn)

## Tot ! Sudo
- [TotSudo.HasRole](/totsudo#hasrole)
- [TotSudo.GetRoles](/totsudo#getroles)
- [TotSudo.HasPermission](/totsudo#haspermission)
- [TotSudo.HasCharTag](/totsudo#haschartag)
- [TotSudo.AddCharTag](/totsudo#addchartag)
- [TotSudo.RemoveCharTag](/totsudo#removechartag)
- [TotSudo.GetCharFloat](/totsudo#getcharfloat)
- [TotSudo.SetCharFloat](/totsudo#setcharfloat)
- [TotSudo.RemoveCharFloat](/totsudo#removecharfloat)
- [TotSudo.GetCharString](/totsudo#getcharstring)
- [TotSudo.SetCharString](/totsudo#setcharstring)
- [TotSudo.RemoveCharString](/totsudo#removecharstring)

## Tot ! Admin
- [TotAdmin.RunScript](/totadmin#runscript)
- [TotAdmin.Teleport](/totadmin#teleport)
- [TotAdmin.Warp](/totadmin#warp)
- [TotAdmin.GiveKit](/totadmin#givekit)

## Tot ! Custom
- [TotCustom.GetBody](/totcustom#getbody)
- [TotCustom.GetArmor](/totcustom#getarmor)
- [TotCustom.GetAccessories](/totcustom#getaccessories)
- [TotCustom.SetBody](/totcustom#setbody)
- [TotCustom.SetArmor](/totcustom#setarmor)
- [TotCustom.SetAccessories](/totcustom#setaccessories)

## Roleplay Redux
- [RPR.Roll](/redux#roll)
- [RPR.GetSkill](/redux#getskill)
- [RPR.GetStat](/redux#getstat)
- [RPR.HasPerk](/redux#hasperk)
- [RPR.AddPerk](/redux#addperk)
- [RPR.RemovePerk](/redux#removeperk)
- [RPR.ModifySkill](/redux#modifyskill)
- [RPR.ModifyStat](/redux#modifystat)
- [RPR.SetStat](/redux#setstat)
- [RPR.SetStatMax](/redux#setstatmax)
- [RPR.HasRune](/redux#hasrune)
- [RPR.HasBuff](/redux#hasbuff)
- [RPR.RemoveBuff](/redux#removebuff)
- [RPR.GiveBuff](/redux#givebuff)
- [RPR.BuffSkill](/redux#buffskill)
- [RPR.BuffStat](/redux#buffstat)
- [RPR.BuffPerk](/redux#buffperk)
- [RPR.BuffAbility](/redux#buffability)
- [RPR.BuffStatus](/redux#buffstatus)
- [RPR.HasItem](/redux#hasitem)
- [RPR.TakeItem](/redux#takeitem)
- [RPR.GiveItem](/redux#giveitem)
- [RPR.GetBuffs](/redux#getbuffs)
- [RPR.GetSheet](/redux#getsheet)
- [RPR.ResetSheet](/redux#resetsheet)
- [RPR.ExportSheet](/redux#exportsheet)
- [RPR.ImportSheet](/redux#importsheet)
- [RPR.HasSpell](/redux#hasspell)
- [RPR.LearnSpell](/redux#learnspell)
- [RPR.ForgetSpell](/redux#forgetspell)
- [RPR.Refresh](/redux#refresh)