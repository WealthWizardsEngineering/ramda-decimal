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
    new Decimal(0).equals(RD.ZERO),
    'RD.ZERO is 0'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.true(
    new Decimal(1).equals(RD.ONE),
    'RD.ONE is 1'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec,
      a => RD.decimal(a)
        .equals(new Decimal(a))),
    true,
    'decimal() for Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec,
      a => RD.dec(a)
        .equals(new Decimal(a).minus(1))),
    true,
    'dec() for Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec,
      a => RD.inc(a)
        .equals(new Decimal(a).plus(1))),
    true,
    'inc() for Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec,
      a => RD.abs(a)
        .equals(new Decimal(a).absoluteValue())),
    true,
    'abs() for Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      a => RD.ceil(a)
        .equals(new Decimal(a).ceil())),
    true,
    'ceil() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      a => RD.floor(a)
        .equals(new Decimal(a).floor())),
    true,
    'floor() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec,
      a => RD.negate(a)
        .equals(new Decimal(a).negated())),
    true,
    'negate() for Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec,
      a => RD.round(a)
        .equals(new Decimal(a).round())),
    true,
    'round() for Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.lt(a, b) === new Decimal(a).lessThan(b)),
    true,
    '2-ary lt() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.lt(a)(b) === new Decimal(a).lessThan(b)),
    true,
    'Curried lt() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.lte(a, b) === new Decimal(a).lessThanOrEqualTo(b)),
    true,
    '2-ary lte() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.lte(a)(b) === new Decimal(a).lessThanOrEqualTo(b)),
    true,
    'Curried lte() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.gt(a, b) === new Decimal(a).greaterThan(b)),
    true,
    '2-ary gt() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.gt(a)(b) === new Decimal(a).greaterThan(b)),
    true,
    'Curried gt() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.gte(a)(b) === new Decimal(a).greaterThanOrEqualTo(b)),
    true,
    '2-ary gte() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(numOrDec, numOrDec,
      (a, b) => RD.gte(a)(b) === new Decimal(a).greaterThanOrEqualTo(b)),
    true,
    'Curried gte() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.add(a, b)
        .equals(
          new Decimal(a).plus(new Decimal(b))
        )
    ),
    true,
    '2-ary add() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.add(a)(b)
        .equals(
          new Decimal(a).plus(new Decimal(b))
        )
    ),
    true,
    'Curried add() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.subtract(a, b)
        .equals(
          new Decimal(a).minus(new Decimal(b))
        )
    ),
    true,
    '2-ary subtract() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.subtract(a)(b)
        .equals(
          new Decimal(a).minus(new Decimal(b))
        )
    ),
    true,
    'Curried subtract() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec,
      jsc.suchthat(numOrDec, R.complement(RD.eq(0))),
      (a, b) => RD.divide(a, b)
        .equals(
          new Decimal(a).dividedBy(new Decimal(b))
        )
    ),
    true,
    '2-ary divide() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec,
      jsc.suchthat(numOrDec, R.complement(RD.eq(0))),
      (a, b) => RD.divide(a)(b)
        .equals(
          new Decimal(a).dividedBy(new Decimal(b))
        )
    ),
    true,
    'Curried divide() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.multiply(a)(b)
        .equals(
          new Decimal(a).times(new Decimal(b))
        )
    ),
    true,
    'curried multiply() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => {
        const actual = RD.modulo(a, b);
        const expected = new Decimal(b).modulo(new Decimal(a));
        return actual.equals(expected) || (actual.isNaN() && expected.isNaN());
      }
    ),
    true,
    '2-ary modulo() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => {
        const actual = RD.modulo(a)(b);
        const expected = new Decimal(b).modulo(new Decimal(a));
        return actual.equals(expected) || (actual.isNaN() && expected.isNaN());
      }
    ),
    true,
    'curried modulo() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.max(a, b)
        .equals(Decimal.max(a, b))
    ),
    true,
    '2-ary max() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.max(a)(b)
        .equals(Decimal.max(a, b))
    ),
    true,
    'curried max() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.min(a, b)
        .equals(Decimal.min(a, b))
    ),
    true,
    '2-ary min() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      numOrDec, numOrDec,
      (a, b) => RD.min(a)(b)
        .equals(Decimal.min(a, b))
    ),
    true,
    'curried min() for mixtures of Decimal and Number'
  );
});

// List reducers
test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      jsc.array(numOrDec),
      (elems) => RD.sum(elems)
        .equals(
          elems.reduce((acc, n) => acc.add(n), new Decimal(0))
        )
    ),
    true,
    'sum() for mixtures of Decimal and Number'
  );
});

test('ramda-decimal', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      jsc.array(numOrDec),
      (elems) => RD.product(elems)
        .equals(
          elems.reduce((acc, n) => acc.times(n), new Decimal(1))
        )
    ),
    true,
    'product() for mixtures of Decimal and Number'
  );
});


// Conversions

test('ramda-decimal conversions', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      jsc.nat(64), // 64 decimal places is enough for anyone (?)
      numOrDec,

      (dp, val) => RD.toFixed(dp)(val) === new Decimal(val).toFixed(dp)
    ),
    true,
    '2-ary toFixed() for Decimal or Number'
  );
});

test('ramda-decimal conversions', (assert) => {
  assert.plan(1);
  assert.equals(
    jsc.checkForall(
      jsc.nat(64), // 64 decimal places is enough for anyone (?)
      numOrDec,

      (dp, val) => RD.toFixed(dp)(val) === new Decimal(val).toFixed(dp)
    ),
    true,
    'Curried toFixed() for Decimal or Number'
  );
});
