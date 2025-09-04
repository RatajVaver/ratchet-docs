# Item

## `GetOwner` <Badge type="info" text="function" />
Syntax:
```lua
Character|Actor Item:GetOwner()
```

## `GetOwnerInventory` <Badge type="info" text="function" />
Syntax:
```lua
Inventory Item:GetOwnerInventory()
```

## `GetId` <Badge type="info" text="function" />
Syntax:
```lua
int Item:GetId()
```

## `GetName` <Badge type="info" text="function" />
Syntax:
```lua
string Item:GetName()
```

## `GetShortDesc` <Badge type="info" text="function" />
Syntax:
```lua
string Item:GetShortDesc()
```

## `GetLongDesc` <Badge type="info" text="function" />
Syntax:
```lua
string Item:GetLongDesc()
```

## `SetStackSize` <Badge type="info" text="function" />
Syntax:
```lua
void Item:SetStackSize( int stackSize )
```

## `CanUseItem` <Badge type="info" text="function" />
Syntax:
```lua
bool Item:CanUseItem( Character player )
```

## `GetIntStat` <Badge type="info" text="function" />
Syntax:
```lua
int Item:GetIntStat( string stat )
```

Available stats:
<div class="table-list">
<div class="entry-wide">CurrentEnchantID</div>
<div class="entry-wide">ActiveAmmunition</div>
<div class="entry-wide">MaxStackSize</div>
<div class="entry-wide">CreationTime</div>
<div class="entry-wide">ItemVersion</div>
<div class="entry-wide">SpellcastID</div>
<div class="entry-wide">DrinkAmount</div>
<div class="entry-wide">FoodAmount</div>
<div class="entry-wide">ItemTier</div>
</div>

## `SetIntStat` <Badge type="info" text="function" />
Syntax:
```lua
bool Item:SetIntStat( string stat, int value )
```