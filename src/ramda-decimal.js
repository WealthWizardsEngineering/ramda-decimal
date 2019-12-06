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

// Inspired by Decimal docs
RD.abs = instanceFunc('absoluteValue');
RD.add = instanceBiFunc('plus');
RD.ceil = instanceFunc('ceil');
RD.eq = instanceBiFunc('equals');
RD.divide = instanceBiFunc('dividedBy');
RD.floor = instanceFunc('floor');
RD.gt = instanceBiFunc('gt');
RD.gte = instanceBiFunc('gte');
RD.lt = instanceBiFunc('lt');
RD.lte = instanceBiFunc('lte');
RD.multiply = instanceBiFunc('times');
RD.negate = instanceFunc('negated');
RD.round = instanceFunc('round');
RD.subtract = instanceBiFunc('minus');
RD.toFixed = R.flip(instanceBiFunc('toFixed'));
RD.modulo = R.flip(instanceBiFunc('modulo'));

// Inspired by Ramda
RD.dec = RD.subtract(R.__, 1);
RD.inc = RD.add(R.__, 1);
RD.sum = R.reduce(RD.add, RD.ZERO);
RD.product = R.reduce(RD.multiply, RD.ONE);
RD.max = coreBiFunc('max');
RD.min = coreBiFunc('min');

module.exports = RD;
