# Objects

This is a list of object structures, their member values and member functions.

## Character
- .ID 
- [:GetName](/characters#getname)
- [:GetRealName](/characters#getrealname)
- [:GetSteamID](/characters#getsteamid)
- [:GetGuildID](/characters#getguildid)
- [:GetPosition](/characters#getposition)

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

## Vector
- .x
- .y
- .z
- [:length](/types/vector#length)
- [:getNormalized](/types/vector#getnormalized)
- [:getDistanceTo](/types/vector#getdistanceto)

::: tip
This object can be directly constructed using `Vector()` for an empty vector, or `Vector(x,y,z)` for an actual representation of position in 3D space.
It can also be returned by various functions.
:::

## Rotator
- .pitch
- .yaw
- .roll

## Actor
- :GetPosition
- :GetRotation
- :SetPosition
- :SetRotation
- :SetPositionAndRotation
- :Teleport
- :GetDistanceTo
- :GetHorizontalDistanceTo
- :GetVerticalDistanceTo
- :GetVelocity
- :GetForwardVector
- :GetUpVector
- :HasTag

## TotAdminTool <Badge type="tip" text="Actor" />

## TotPuppet <Badge type="tip" text="TotAdminTool" />
- :Move
- :GetPosition
- :GetName
- :SetName
- :Delete
- :SendLocal
- :GetSheet
- :SetSheet

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

## TotPuppet
- [:Move](/totadmin#move)
- [:GetPosition](/totadmin#getposition)
- [:GetName](/totadmin#getname)
- [:SetName](/totadmin#setname)
- [:Delete](/totadmin#delete)
- [:SendLocal](/totadmin#sendlocal)
- [:GetSheet](/totadmin#getsheet)
- [:SetSheet](/totadmin#setsheet)

::: warning
This object cannot be directly constructed!
Use [TotAdmin.GetPuppet](/totadmin#getpuppet) to retrieve a valid instance.
:::