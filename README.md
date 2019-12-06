[![NPM](https://nodei.co/npm/ramda-decimal.png?compact=true)](https://nodei.co/npm/ramda-decimal/)

# ramda-decimal [![CircleCI](https://circleci.com/gh/WealthWizardsEngineering/ramda-decimal.svg?style=svg)](https://circleci.com/gh/WealthWizardsEngineering/ramda-decimal)
Ramda wrapper to Decimal.js

Use Decimal.js arbitrary precision maths in Ramda style. Immutable. Composable. Curry-able.

Drop-in replacements for most Ramda math functions.

    const R = require('ramda);
    const RD = require('ramda-decimal);

    const annualTax = R.pipe(
        R.pluck(income),
        RD.sum,
        RD.times(TAX_RATE),
    );

    const format = RD.fixed(2);

    console.log(format(annualTax(months)));

# Liberal inputs, conservative outputs

Like Decimal.js, RD accepts Decimals, number primitives and strings that look like numbers. RD does this by calling `new Decimal()` on any input.

All RD functions return `Decimal`s.

# Constants

`ZERO` and `ONE` are defined as constants. Use them! They're immutable.

# Parameter order

When there is a corresponding Ramda function, RD uses the same parameter order. This does mean that curried relation functions 
are unintuitive (in my opinion) in the same way as Ramda:

    const f = RD.gt(5);
    return f(6); // false: gt(5,6)

Where there is no corresponding Ramda function, we have flipped the parameters when it seems useful for point-free coding:

    const formatToPennies = RD.toFixed(2);

# Mixed style

Returned values are just `Decimal` objects, so you are free to combine styles
if you want to:

    const displayTotal = RD.sum(vals).fixed(2, Decimal.ROUND_HALF_UP);

------

Created by Wealth Wizards Software Engineering - http://wealthwizards.com
