# World

World is a library for game world related tasks.

## `GetLandOwner` <Badge type="info" text="function" />
Syntax:
```lua
LandOwner World.GetLandOwner( Vector location )
```

Example:
```lua
local claim = World.GetLandOwner(Vector(0,0,0))
if(claim.guild)then
    print("Land is owned by: " .. claim.guild:GetName())
else
    print("Land is not owned by a clan")
end
```