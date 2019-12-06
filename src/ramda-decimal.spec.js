const test = require('tape');
const { Decimal } = require('decimal.js');
const R = require('ramda');
const jsc = require('jsverify');

const RD = require('./ramda-decimal');

const numOrDec = jsc.oneof([
  jsc.number,
  jsc.number.smap(
    x => new Decimal(x),
    d => d.toNumber()
  ),
]);

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec,
      a => RD.abs(a)
        .equals(new Decimal(a).absoluteValue())),
    'abs() for Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      a => RD.ceil(a)
        .equals(new Decimal(a).ceil())),
    'ceil() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      a => RD.floor(a)
        .equals(new Decimal(a).floor())),
    'floor() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec,
      a => RD.negate(a)
        .equals(new Decimal(a).negated())),
    'negate() for Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec,
      a => RD.round(a)
        .equals(new Decimal(a).round())),
    'round() for Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.lt(a, b) === new Decimal(a).lessThan(b)),
    '2-ary lt() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.lt(a)(b) === new Decimal(a).lessThan(b)),
    'Curried lt() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.lte(a, b) === new Decimal(a).lessThanOrEqualTo(b)),
    '2-ary lte() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.lte(a)(b) === new Decimal(a).lessThanOrEqualTo(b)),
    'Curried lte() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.gt(a, b) === new Decimal(a).greaterThan(b)),
    '2-ary gt() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.gt(a)(b) === new Decimal(a).greaterThan(b)),
    'Curried gt() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.gte(a)(b) === new Decimal(a).greaterThanOrEqualTo(b)),
    '2-ary gte() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.gte(a)(b) === new Decimal(a).greaterThanOrEqualTo(b)),
    'Curried gte() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.add(a, b)
        .equals(
          new Decimal(a).plus(new Decimal(b))
        )
    ),
    '2-ary add() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.add(a)(b)
        .equals(
          new Decimal(a).plus(new Decimal(b))
        )
    ),
    'Curried add() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.subtract(a, b)
        .equals(
          new Decimal(a).minus(new Decimal(b))
        )
    ),
    '2-ary subtract() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.subtract(a)(b)
        .equals(
          new Decimal(a).minus(new Decimal(b))
        )
    ),
    'Curried subtract() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(
      numOrDec,
      jsc.suchthat(numOrDec, R.complement(RD.eq(0))),
      (a, b) => RD.divide(a, b)
        .equals(
          new Decimal(a).dividedBy(new Decimal(b))
        )
    ),
    '2-ary divide() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(
      numOrDec,
      jsc.suchthat(numOrDec, R.complement(RD.eq(0))),
      (a, b) => RD.divide(a)(b)
        .equals(
          new Decimal(a).dividedBy(new Decimal(b))
        )
    ),
    'Curried divide() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.multiply(a)(b)
        .equals(
          new Decimal(a).times(new Decimal(b))
        )
    ),
    'curried multiply() for mixtures of Decimal and Number'
  );
});

// Conversions

test('ramda-decimal conversions', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(
      jsc.nat(64), // 64 decimal places is enough for anyone (?)
      numOrDec,

      (dp, val) => RD.toFixed(dp)(val) === new Decimal(val).toFixed(dp)
    ),
    '2-ary toFixed() for Decimal or Number'
  );
});

test('ramda-decimal conversions', (assert) => {
  assert.plan(1);
  assert.true(
    jsc.checkForall(
      jsc.nat(64), // 64 decimal places is enough for anyone (?)
      numOrDec,

      (dp, val) => RD.toFixed(dp)(val) === new Decimal(val).toFixed(dp)
    ),
    'Curried toFixed() for Decimal or Number'
  );
});
