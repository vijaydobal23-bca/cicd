// ─── Utility Functions ───────────────────────────────────────────────────────

function add(a, b)      { return a + b; }
function subtract(a, b) { return a - b; }
function multiply(a, b) { return a * b; }
function divide(a, b)   {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
}
function isEven(n)      { return n % 2 === 0; }
function clamp(n, min, max) { return Math.min(Math.max(n, min), max); }

// ─── Test Suite: add() ───────────────────────────────────────────────────────
describe('add()', () => {
  test('adds two positive numbers', ()   => expect(add(2, 3)).toBe(5));
  test('adds negative numbers',     ()   => expect(add(-1, -2)).toBe(-3));
  test('adds zero',                  ()   => expect(add(5, 0)).toBe(5));
  test('adds floats',                ()   => expect(add(0.1, 0.2)).toBeCloseTo(0.3));
});

// ─── Test Suite: subtract() ──────────────────────────────────────────────────
describe('subtract()', () => {
  test('subtracts two numbers',      ()   => expect(subtract(10, 4)).toBe(6));
  test('result can be negative',     ()   => expect(subtract(3, 7)).toBe(-4));
  test('subtracts zero',             ()   => expect(subtract(5, 0)).toBe(5));
});

// ─── Test Suite: multiply() ──────────────────────────────────────────────────
describe('multiply()', () => {
  test('multiplies two positives',   ()   => expect(multiply(3, 4)).toBe(12));
  test('multiplies by zero',         ()   => expect(multiply(99, 0)).toBe(0));
  test('multiplies negatives',       ()   => expect(multiply(-2, -3)).toBe(6));
  test('multiplies mixed signs',     ()   => expect(multiply(-2, 3)).toBe(-6));
});

// ─── Test Suite: divide() ────────────────────────────────────────────────────
describe('divide()', () => {
  test('divides two numbers',        ()   => expect(divide(10, 2)).toBe(5));
  test('returns float result',       ()   => expect(divide(7, 2)).toBe(3.5));
  test('throws on divide by zero',   ()   => expect(() => divide(5, 0)).toThrow('Division by zero'));
});

// ─── Test Suite: isEven() ────────────────────────────────────────────────────
describe('isEven()', () => {
  test('returns true for even',      ()   => expect(isEven(4)).toBe(true));
  test('returns false for odd',      ()   => expect(isEven(7)).toBe(false));
  test('zero is even',               ()   => expect(isEven(0)).toBe(true));
});

// ─── Test Suite: clamp() ─────────────────────────────────────────────────────
describe('clamp()', () => {
  test('clamps below min',           ()   => expect(clamp(-10, 0, 100)).toBe(0));
  test('clamps above max',           ()   => expect(clamp(200, 0, 100)).toBe(100));
  test('returns value in range',     ()   => expect(clamp(50, 0, 100)).toBe(50));
});
