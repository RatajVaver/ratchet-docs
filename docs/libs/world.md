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
if(claim > 0)then
    local guild = getGuildFromID(claim)
    if(guild)then
        print("Land is owned by " .. guild:GetName())
    else
        print("Land is owned by a player")
    end
else
    print("Land is unclaimed")
end
```