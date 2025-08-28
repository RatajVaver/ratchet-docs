# Dice

Dice is a simple library for generating random numbers by rolling dice.

## `Roll` <Badge type="info" text="function" />
Returns a sum of dice rolls based on amount of dice and sides of each die.

You can either specify number of dice and number of sides as two numeric arguments, or call the function with a dice notation string (such as `1d6` or `3d8`).

Syntax:
```lua
int, table<int> Dice.Roll( int count, int sides )
int, table<int> Dice.Roll( string formula )
```

Example:
```lua
local result = Dice.Roll(2,6) -- roll a 2d6

-- we can also use string notation and get individual rolls
local total, rolls = Dice.Roll("2d6")
```

## Aliases
The most common types of dice have simple aliases to use when you need to roll just one.

Syntax:
```lua
int Dice.D4()
int Dice.D6()
int Dice.D8()
int Dice.D10()
int Dice.D12()
int Dice.D20()
```