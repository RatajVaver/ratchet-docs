# Objects

This is a list of object structures (types), their member values and member functions.

## Character
- .ID 
- [:GetName](/types/character#getname)
- [:GetRealName](/types/character#getrealname)
- [:GetSteamID](/types/character#getsteamid)
- [:GetGuildID](/types/character#getguildid)
- [:GetPosition](/types/character#getposition)
- [:GiveItem](/types/character#giveitem)
- [:Notify](/types/character#notify)
- [:ExecuteConsoleCommand](/types/character#executeconsolecommand)

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
Use [RPR.GetSheet](/redux#getsheet) to retrieve a valid instance.
:::

## GUID
- .A
- .B
- .C
- .D

## Color
- .R
- .G
- .B
- .A

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

## TotAdminTool <Badge type="tip" text="Actor" />

## TotPuppet <Badge type="tip" text="TotAdminTool" />
- [:Move](/totadmin#move)
- [:GetName](/totadmin#getname)
- [:SetName](/totadmin#setname)
- [:Delete](/totadmin#delete)
- [:SendLocal](/totadmin#sendlocal)
- [:GetSheet](/totadmin#getsheet)
- [:SetSheet](/totadmin#setsheet)
- [:GetTags](/totadmin#gettags)
- [:SetTags](/totadmin#settags)

::: warning
This object cannot be directly constructed!
Use [TotAdmin.GetPuppet](/totadmin#getpuppet) to retrieve a valid instance.
:::

## TotPuppetTag
- .guid
- .name
- .color