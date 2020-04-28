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

# Currying and efficiency

For brevity the documentation suggests that (for example)
`RD.add(a)(b)` is equivalent to `new Decimal(a).plus(b)`. The reality is
a bit better than that. `RD.add(a)` stores any `Decimal` it creates
for reuse. Hence in:

    const addTen = RD.add(10);
    const n110 = addTen(100);
    const n210 = addTen(200);

 ... `new Decimal(10)` is only run once.

# Mixed style

Returned values are just `Decimal` objects, so you are free to combine styles
if you want to:

    const displayTotal = RD.sum(vals).fixed(2, Decimal.ROUND_HALF_UP);

# Docs

## Modules

<dl>
<dt><a href="#module_ramda-decimal">ramda-decimal</a></dt>
<dd><p>Ramda-style curried functions wrapping the methods of Decimal.js</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#DecimalLike">DecimalLike</a> : <code>Decimal</code> | <code>number</code> | <code>string</code></dt>
<dd><p>A Decimal, number, or a string containing a number.
That is, any valid parameter to <code>new Decimal(...)</code></p>
</dd>
</dl>

<a name="module_ramda-decimal"></a>

## ramda-decimal
Ramda-style curried functions wrapping the methods of Decimal.js

<a name="DecimalLike"></a>

## DecimalLike : <code>Decimal</code> \| <code>number</code> \| <code>string</code>
A Decimal, number, or a string containing a number.
That is, any valid parameter to `new Decimal(...)`

**Kind**: global typedef  
<a name="abs"></a>

## .abs(n) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(n).absoluteValue()`

**Kind**: static function  

| Param | Type |
| --- | --- |
| n | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="add"></a>

## .add(a, b) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(a).plus(b)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="ceil"></a>

## .ceil(n) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(n).ceil()`

**Kind**: static function  

| Param | Type |
| --- | --- |
| n | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="eq"></a>

## .eq(a, b) ⇒ <code>boolean</code>
Equivalent to `new Decimal(a).equals(b)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="divide"></a>

## .divide(a, b) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(a).dividedBy(b)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="divideBy"></a>

## .divideBy(a, b) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(b).dividedBy(a)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="floor"></a>

## .floor(n) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(n).floor()`

**Kind**: static function  

| Param | Type |
| --- | --- |
| n | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="gt"></a>

## .gt(a, b) ⇒ <code>boolean</code>
Equivalent to `new Decimal(a).gt(b)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="gte"></a>

## .gte(a, b) ⇒ <code>boolean</code>
Equivalent to `new Decimal(a).gte(b)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="lt"></a>

## .lt(a, b) ⇒ <code>boolean</code>
Equivalent to `new Decimal(a).lt(b)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="lte"></a>

## .lte(a, b) ⇒ <code>boolean</code>
Equivalent to `new Decimal(a).lte(b)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="multiply"></a>

## .multiply(a, b) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(a).times(b)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="negate"></a>

## .negate(a) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(a).negated()`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="round"></a>

## .round(a) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(a).round()`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="subtract"></a>

## .subtract(a, b) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(a).minus(b)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 
| b | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="toFixed"></a>

## .toFixed(roundingMode, num) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(num).toFixed(roundingMode)`

See Decimal.js docs for ROUNDING_MODE constants

**Kind**: static function  

| Param | Type |
| --- | --- |
| roundingMode | <code>num</code> | 
| num | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="toNumber"></a>

## .toNumber(a) ⇒ <code>Number</code>
Equivalent to `new Decimal(a).toNumber()`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="modulo"></a>

## .modulo(modulus, value) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(value).modulo(modulus)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| modulus | [<code>DecimalLike</code>](#DecimalLike) | 
| value | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="toPower"></a>

## .toPower(power, value) ⇒ <code>Decimal</code>
Equivalent to `new Decimal(value).toPower(modulus)`

**Kind**: static function  

| Param | Type |
| --- | --- |
| power | [<code>DecimalLike</code>](#DecimalLike) | 
| value | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="isPositive"></a>

## .isPositive(a) ⇒ <code>boolean</code>
Equivalent to `new Decimal(a).isPositive()`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="isNegative"></a>

## .isNegative(a) ⇒ <code>boolean</code>
Equivalent to `new Decimal(a).isNegative()`

**Kind**: static function  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="dec"></a>

## .dec(a) ⇒ <code>Decimal</code>
Decrements a Decimal or value that may be converted into Decimal

**Kind**: static function  
**Returns**: <code>Decimal</code> - a minus 1  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="inc"></a>

## .inc(a) ⇒ <code>Decimal</code>
Increments a Decimal or value that may be converted into Decimal

**Kind**: static function  
**Returns**: <code>Decimal</code> - a plus 1  

| Param | Type |
| --- | --- |
| a | [<code>DecimalLike</code>](#DecimalLike) | 

<a name="sum"></a>

## .sum(a) ⇒ <code>Decimal</code>
Returns the sum of an array of Decimals or values that may be converted into Decimal

**Kind**: static function  
**Returns**: <code>Decimal</code> - The sum of the values in a  

| Param | Type |
| --- | --- |
| a | [<code>Array.&lt;DecimalLike&gt;</code>](#DecimalLike) | 

<a name="product"></a>

## .product(a) ⇒ <code>Decimal</code>
Returns the product of an array of Decimals or values that may be converted into Decimal

**Kind**: static function  
**Returns**: <code>Decimal</code> - The product of the values in a  

| Param | Type |
| --- | --- |
| a | [<code>Array.&lt;DecimalLike&gt;</code>](#DecimalLike) | 

<a name="max"></a>

## .max(a, b) ⇒ <code>Decimal</code>
Returns the highest of a or b

**Kind**: static function  
**Returns**: <code>Decimal</code> - The highest of a or b  

| Param | Type |
| --- | --- |
| a | [<code>Array.&lt;DecimalLike&gt;</code>](#DecimalLike) | 
| b | [<code>Array.&lt;DecimalLike&gt;</code>](#DecimalLike) | 

<a name="min"></a>

## .min(a, b) ⇒ <code>Decimal</code>
Returns the lowest of a or b

**Kind**: static function  
**Returns**: <code>Decimal</code> - The lowest of a or b  

| Param | Type |
| --- | --- |
| a | [<code>Array.&lt;DecimalLike&gt;</code>](#DecimalLike) | 
| b | [<code>Array.&lt;DecimalLike&gt;</code>](#DecimalLike) | 


------

Created by Wealth Wizards Software Engineering - http://wealthwizards.com
