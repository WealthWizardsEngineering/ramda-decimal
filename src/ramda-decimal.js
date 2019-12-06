const { Decimal } = require('decimal.js');
const R = require('ramda');

const func = name => x => new Decimal(x)[name]();

const biFunc = name => R.curry(
  (x, y) => new Decimal(x)[name](y)
);

module.exports = {
  ZERO: new Decimal(0),
  abs: func('absoluteValue'),
  add: biFunc('plus'),
  ceil: func('ceil'),
  eq: biFunc('equals'),
  divide: biFunc('dividedBy'),
  floor: func('floor'),
  gt: biFunc('gt'),
  gte: biFunc('gte'),
  lt: biFunc('lt'),
  lte: biFunc('lte'),
  multiply: biFunc('times'),
  negate: func('negated'),
  round: func('round'),
  subtract: biFunc('minus'),
  toFixed: R.flip(biFunc('toFixed')),
};
