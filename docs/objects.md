# Objects

This is a list of object structures (types), their member values and member functions.

## Character
- .ID 
- [:GetName](/types/character#getname)
- [:GetRealName](/types/character#getrealname)
- [:GetSteamID](/types/character#getsteamid)
- [:GetGuildID](/types/character#getguildid)
- [:GetPosition](/types/character#getposition)
- [:GetFeetPosition](/types/character#getfeetposition)
- [:GiveItem](/types/character#giveitem)
- [:Notify](/types/character#notify)
- [:ExecuteConsoleCommand](/types/character#executeconsolecommand)
- [:CallComponentFunction](/types/character#callcomponentfunction)

::: warning
This object cannot be directly constructed!
Use references obtained from events or functions.
:::

## CharacterSheet
- .name
- .skills
- .skillsAllocated
- .skillsTotal
- .stats
- .statsCurrent
- .statsMax
- .perksActive
- .perksCategories
- .perksAssigned
- .statuses
- .buffs
- .zones
- .runes

::: warning
This object cannot be directly constructed!
Use [RPR.GetSheet](/mods/redux#getsheet) to retrieve a valid instance.
:::

## ReduxAbility
- .id
- .name
- .category
- .range

::: warning
This object cannot be directly constructed!
Use [RPR.GetAbilities](/mods/redux#getabilities) to retrieve a valid instance.
:::

## GUID
- .A
- .B
- .C
- .D

::: tip
This object can be directly constructed using `GUID()` for a new random GUID.

Specific GUID can also be re-created using `GUID(guidString)` (A-B-C-D format) or using `GUID(A,B,C,D)` with all parts being integers.
Try to prefer the former over the latter.

To convert GUID into a string format accepted by the constructor, use `tostring(myGuid)`
:::

## Color
- .R
- .G
- .B
- .A

::: tip
This object can be directly constructed using `Color(R,G,B,A)` or `Color(R,G,B)` (non-transparent), all values have to be either 0-255 (int) or 0-1 (float).

You can also use single argument Lua hex integer like this: `Color(0xFFCC00)`
:::

## Vector
- .x
- .y
- .z
- [:length](/types/vector#length)
- [:getNormalized](/types/vector#getnormalized)
- [:getDistanceTo](/types/vector#getdistanceto)
- [:findLookAtRotation](/types/vector#findlookatrotation)

::: tip
This object can be directly constructed using `Vector()` for an empty vector, or `Vector(x,y,z)` for an actual representation of position in 3D space.
It can also be returned by various functions.
:::

## Rotator
- .pitch
- .yaw
- .roll

::: tip
Rotators can be constructed in the same way as Vectors.
:::

## Actor
- .owner
- [:IsValid](/types/actor#isvalid)
- [:GetActorName](/types/actor#getactorname)
- [:GetClassName](/types/actor#getclassname)
- [:GetPathName](/types/actor#getpathname)
- [:GetLocation](/types/actor#getlocation)
- [:GetRotation](/types/actor#getrotation)
- [:SetLocation](/types/actor#setlocation)
- [:SetRotation](/types/actor#setrotation)
- [:GetFeetLocation](/types/actor#getfeetlocation)
- [:SetLocationAndRotation](/types/actor#setlocationandrotation)
- [:Teleport](/types/actor#teleport)
- [:GetDistanceTo](/types/actor#getdistanceto)
- [:GetHorizontalDistanceTo](/types/actor#gethorizontaldistanceto)
- [:GetVerticalDistanceTo](/types/actor#getverticaldistanceto)
- [:GetVelocity](/types/actor#getvelocity)
- [:GetForwardVector](/types/actor#getforwardvector)
- [:GetUpVector](/types/actor#getupvector)
- [:HasTag](/types/actor#hastag)
- [:IsOverlappingActor](/types/actor#isoverlappingactor)
- [:GetEyesViewPoint](/types/actor#geteyesviewpoint)
- [:Destroy](/types/actor#destroy)
- [:CallFunction](/types/actor#callfunction)

## Inventory
- [:GetAllItems](/types/inventory#getallitems)
- [:GetItemByIndex](/types/inventory#getitembyindex)
- [:GetItemById](/types/inventory#getitembyid)
- [:HasItem](/types/inventory#hasitem)
- [:CountItems](/types/inventory#countitems)
- [:SpawnItem](/types/inventory#spawnitem)

## Item
- [:GetOwner](/types/item#getowner)
- [:GetOwnerInventory](/types/item#getownerinventory)
- [:GetId](/types/item#getid)
- [:GetName](/types/item#getname)
- [:GetShortDesc](/types/item#getshortdesc)
- [:GetLongDesc](/types/item#getlongdesc)
- [:SetStackSize](/types/item#setstacksize)
- [:CanUseItem](/types/item#canuseitem)
- [:GetIntStat](/types/item#getintstat)
- [:SetIntStat](/types/item#setintstat)

## DatabaseConnection
- [:query](/database#query)
- [:exec](/database#exec)
- [:prepare](/database#prepare)
- [:close](/database#close)
- [:isConnected](/database#isConnected)
- [:poolSize](/database#poolSize)

::: warning
This object cannot be directly constructed!
Use [dbConnect](/database#dbconnect) to retrieve a valid instance.
:::

## TotZone <Badge type="tip" text="Actor" />
- [:GetUID](/mods/totadmin#getuid)
- [:GetName](/mods/totadmin#getname)
- [:SetName](/mods/totadmin#getname)
- [:GetParam](/mods/totadmin#getparam)
- [:SetParam](/mods/totadmin#setparam)
- [:IsBox](/mods/totadmin#isbox)
- [:IsSphere](/mods/totadmin#issphere)

::: warning
This object cannot be directly constructed!
Use [TotAdmin.GetZone](/mods/totadmin#getzone) to retrieve a valid instance.
:::

## TotPuppet <Badge type="tip" text="Actor" />
- [:Move](/mods/totadmin#move)
- [:GetUID](/mods/totadmin#getuid-1)
- [:GetName](/mods/totadmin#getname-1)
- [:SetName](/mods/totadmin#setname)
- [:Delete](/mods/totadmin#delete)
- [:SendLocal](/mods/totadmin#sendlocal)
- [:GetSheet](/mods/totadmin#getsheet)
- [:SetSheet](/mods/totadmin#setsheet)
- [:GetTags](/mods/totadmin#gettags)
- [:SetTags](/mods/totadmin#settags)

::: warning
This object cannot be directly constructed!
Use [TotAdmin.GetPuppet](/mods/totadmin#getpuppet) to retrieve a valid instance.
:::

## TotPuppetTag
- .guid
- .name
- .color

## TotMapMarker
- .guid
- .name
- .x
- .y
- .icon
- .iconName