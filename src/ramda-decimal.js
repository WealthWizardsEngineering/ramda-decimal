const { Decimal } = require('decimal.js');
const R = require('ramda');

const instanceFunc = name => x => new Decimal(x)[name]();

const instanceBiFunc = name => R.uncurryN(
  2,
  x => {
    const dx = new Decimal(x);
    return y => dx[name](y);
  }
);

const coreBiFunc = name => R.uncurryN(
  2,
  x => {
    const dx = new Decimal(x);
    return y => Decimal[name](dx, y);
  }
);

const RD = {};

RD.ZERO = new Decimal(0);
RD.ONE = new Decimal(1);

RD.decimal = x => new Decimal(x);

/**
 * A Decimal, number, or a string containing a number.
 * That is, any valid parameter to `new Decimal(...)`
 * @typedef {(Decimal|number|string)} DecimalLike
 */

// Inspired by Decimal docs

/**
 * Equivalent to `new Decimal(n).absoluteValue()`
 *
 * @method abs
 * @param  n {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.abs = instanceFunc('absoluteValue');

/**
 * Equivalent to `new Decimal(a).plus(b)`
 *
 * @method add
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.add = instanceBiFunc('plus');

/**
 * Equivalent to `new Decimal(n).ceil()`
 *
 * @method ceil
 * @param  n {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.ceil = instanceFunc('ceil');

/**
 * Equivalent to `new Decimal(a).equals(b)`
 *
 * @method eq
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {boolean}
 * @static
 */
RD.eq = instanceBiFunc('equals');

/**
 * Equivalent to `new Decimal(a).dividedBy(b)`
 *
 * @method divide
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.divide = instanceBiFunc('dividedBy');

/**
 * Equivalent to `new Decimal(b).dividedBy(a)`
 *
 * @method divideBy
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.divideBy = R.flip(RD.divide);

/**
 * Equivalent to `new Decimal(n).floor()`
 *
 * @method floor
 * @param  n {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.floor = instanceFunc('floor');

/**
 * Equivalent to `new Decimal(a).gt(b)`
 *
 * @method gt
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {boolean}
 * @static
 */
RD.gt = instanceBiFunc('gt');

/**
 * Equivalent to `new Decimal(a).gte(b)`
 *
 * @method gte
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {boolean}
 * @static
 */
RD.gte = instanceBiFunc('gte');

/**
 * Equivalent to `new Decimal(a).lt(b)`
 *
 * @method lt
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {boolean}
 * @static
 */
RD.lt = instanceBiFunc('lt');

/**
 * Equivalent to `new Decimal(a).lte(b)`
 *
 * @method lte
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {boolean}
 * @static
 */
RD.lte = instanceBiFunc('lte');

/**
 * Equivalent to `new Decimal(a).times(b)`
 *
 * @method multiply
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.multiply = instanceBiFunc('times');

/**
 * Equivalent to `new Decimal(a).negated()`
 *
 * @method negate
 * @param  a {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.negate = instanceFunc('negated');

/**
 * Equivalent to `new Decimal(a).round()`
 *
 * @method round
 * @param  a {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.round = instanceFunc('round');

/**
 * Equivalent to `new Decimal(a).minus(b)`
 *
 * @method subtract
 * @param  a {DecimalLike}
 * @param  b {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.subtract = instanceBiFunc('minus');

/**
 * Equivalent to `new Decimal(num).toFixed(roundingMode)`
 *
 * See Decimal.js docs for ROUNDING_MODE constants
 *
 * @method toFixed
 * @param roundingMode {num}
 * @param  num {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.toFixed = R.flip(instanceBiFunc('toFixed'));

/**
 * Equivalent to `new Decimal(a).toNumber()`
 *
 * @method toNumber
 * @param  a {DecimalLike}
 * @returns {Number}
 * @static
 */
RD.toNumber = instanceFunc('toNumber');

/**
 * Equivalent to `new Decimal(value).modulo(modulus)`
 *
 * @method modulo
 * @param  modulus {DecimalLike}
 * @param  value {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.modulo = R.flip(instanceBiFunc('modulo'));

/**
 * Equivalent to `new Decimal(value).toPower(modulus)`
 *
 * @method toPower
 * @param  power {DecimalLike}
 * @param  value {DecimalLike}
 * @returns {Decimal}
 * @static
 */
RD.toPower = R.flip(instanceBiFunc('toPower'));

/**
 * Equivalent to `new Decimal(a).isPositive()`
 *
 * @method isPositive
 * @param  a {DecimalLike}
 * @returns {boolean}
 * @static
 */
RD.isPositive = instanceFunc('isPositive');

/**
 * Equivalent to `new Decimal(a).isNegative()`
 *
 * @method isNegative
 * @param  a {DecimalLike}
 * @returns {boolean}
 * @static
 */
RD.isNegative = instanceFunc('isNegative');

// Inspired by Ramda
/**
 * Decrements a Decimal or value that may be converted into Decimal
 *
 * @method dec
 * @param  a {DecimalLike}
 * @returns {Decimal} a minus 1
 * @static
 */
RD.dec = RD.subtract(R.__, 1);

/**
 * Increments a Decimal or value that may be converted into Decimal
 *
 * @method inc
 * @param a {DecimalLike}
 * @returns {Decimal} a plus 1
 * @static
 */
RD.inc = RD.add(R.__, 1);

/**
 * Returns the sum of an array of Decimals or values that may be converted into Decimal
 *
 * @method sum
 * @param  a {DecimalLike[]}
 * @returns {Decimal} The sum of the values in a
 * @static
 */
RD.sum = R.reduce(RD.add, RD.ZERO);

/**
 * Returns the product of an array of Decimals or values that may be converted into Decimal
 *
 * @method product
 * @param  a {DecimalLike[]}
 * @returns {Decimal} The product of the values in a
 * @static
 */
RD.product = R.reduce(RD.multiply, RD.ONE);

/**
 * Returns the highest of a or b
 *
 * @method max
 * @param  a {DecimalLike[]}
 * @param  b {DecimalLike[]}
 * @returns {Decimal} The highest of a or b
 * @static
 */
RD.max = coreBiFunc('max');

/**
 * Returns the lowest of a or b
 *
 * @method min
 * @param  a {DecimalLike[]}
 * @param  b {DecimalLike[]}
 * @returns {Decimal} The lowest of a or b
 * @static
 */
RD.min = coreBiFunc('min');

/**
 * Ramda-style curried functions wrapping the methods of Decimal.js
 *
 * @module ramda-decimal
 * @typicalname RD
 *
 */
module.exports = RD;
