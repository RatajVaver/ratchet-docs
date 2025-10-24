# Inventory

## `getInventoryByType` <Badge type="info" text="function" />

Syntax:
```lua
Inventory|nil getInventoryByType( Character|Actor owner, int|string inventoryType )
```

| ID | Inventory Type |
| - | - |
| 0 | Backpack |
| 1 | Equipment |
| 2 | ShortcutBar |
| 3 | Recipes |
| 4 | PlaceableInventory |
| 5 | CraftingQueue |
| 6 | Feats |
| 7 | Emotes |
| 8 | CraftingArtisanInventory |
| 9 | CraftingArtisanRecipeInventory |
| 10 | SiegeWeaponCounterWeightInventory |
| 11 | WeaponInventory |
| 12 | PetInventory |
| 13 | CraftingIngredientsInventory |
| 14 | DismantlerInventory |
| 15 | Spells |
| 16 | VisualIllusionSource |
| 17 | VisualIllusionTarget |
| 18 | VisualIllusionResult |
| 19 | GolemParts |
| 20 | Workorders |
| 21 | Patrons |

## `GetAllItems` <Badge type="info" text="function" />
Syntax:
```lua
table<Item> Inventory:GetAllItems()
```

## `GetItemByIndex` <Badge type="info" text="function" />
Syntax:
```lua
Item|nil Inventory:GetItemByIndex( int index )
```

## `GetItemById` <Badge type="info" text="function" />
Syntax:
```lua
Item|nil Inventory:GetItemById( int templateId )
```

## `HasItem` <Badge type="info" text="function" />
Syntax:
```lua
bool Inventory:HasItem( int templateId [, int quantity = 1 ] )
```

## `CountItems` <Badge type="info" text="function" />
Syntax:
```lua
int Inventory:CountItems( int templateId )
```

## `SpawnItem` <Badge type="info" text="function" />
Syntax:
```lua
Item, int Inventory:SpawnItem( int templateId )
```

## `DeleteItem` <Badge type="info" text="function" />
Syntax:
```lua
bool Inventory:DeleteItem( int templateId [, int quantity = 1 ] )
```

## `MoveItems` <Badge type="info" text="function" />
Syntax:
```lua
bool Inventory:MoveItems( Inventory target, int templateId [, int quantity = 1 ] )
```

## `GetItemIndex` <Badge type="info" text="function" />
Syntax:
```lua
int Inventory:GetItemIndex( Item item )
```

## `FindItemById` <Badge type="info" text="function" />
Syntax:
```lua
int Inventory:FindItemById( int templateId [, int startIndex = 0 ] )
```

## `DropItem` <Badge type="info" text="function" />
Syntax:
```lua
void Inventory:DropItem( int index, Character invokingPlayer )
```