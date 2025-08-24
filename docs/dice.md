# Dice

Dice is a simple library for generating random numbers by rolling dice.

## `Roll` <Badge type="info" text="function" />
Returns a sum of dice rolls based on amount of dice and sides of each die.

Syntax:
```lua
int Dice.Roll( int count, int sides )
```

Example:
```lua
local result = Dice.Roll(2,6) -- roll a 2d6
```

## Aliases

Syntax:
```lua
int Dice.D4()
int Dice.D6()
int Dice.D8()
int Dice.D10()
int Dice.D12()
int Dice.D20()
```