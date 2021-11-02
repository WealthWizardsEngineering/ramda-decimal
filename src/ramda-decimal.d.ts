import Decimal from "decimal.js";

export type DecimalNumberOrString = Decimal | number | string;

export const ZERO : Decimal;
export const ONE : Decimal;

export function abs(a: DecimalNumberOrString) : Decimal;
export function add(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal;
export function add(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal;
export function ceil(a: DecimalNumberOrString) : Decimal ;
export function divide(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal ;
export function divide(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal ;
export function divideBy(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal ;
export function divideBy(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal ;
export function eq(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal ;
export function eq(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal ;
export function floor(a: DecimalNumberOrString) : Decimal ;
export function gt(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal ;
export function gt(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal ;
export function gte(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal ;
export function gte(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal ;
export function isNegative(a: DecimalNumberOrString) : Decimal;
export function isPositive(a: DecimalNumberOrString) : Decimal;
export function lt(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal ;
export function lt(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal ;
export function lte(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal ;
export function lte(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal ;
export function modulo(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal;
export function modulo(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal;
export function multiply(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal ;
export function multiply(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal ;
export function negate(a: DecimalNumberOrString) : Decimal ;
export function round(a: DecimalNumberOrString) : Decimal ;
export function subtract(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal ;
export function subtract(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal ;
export function toPower(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal;
export function toPower(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal;

// Conversions
export function decimal(a: DecimalNumberOrString) : Decimal;
export function toFixed(a: DecimalNumberOrString, b: DecimalNumberOrString) : String;
export function toFixed(a: DecimalNumberOrString): (b: DecimalNumberOrString) => String;
export function toNumber(b: DecimalNumberOrString) : number;

// Inspired by Ramda
export function dec(a: DecimalNumberOrString) : Decimal;
export function inc(a: DecimalNumberOrString) : Decimal;
export function sum(a: DecimalNumberOrString[]) : Decimal;
export function product(a: DecimalNumberOrString[]) : Decimal;
export function max(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal;
export function max(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal;
export function min(a: DecimalNumberOrString, b: DecimalNumberOrString) : Decimal;
export function min(a: DecimalNumberOrString): (b: DecimalNumberOrString) => Decimal;
