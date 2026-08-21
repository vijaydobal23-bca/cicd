// Simple unit test to verify CI pipeline works

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// Tests
test('adds 2 + 3 to equal 5', () => {
  expect(add(2, 3)).toBe(5);
});

test('subtracts 10 - 4 to equal 6', () => {
  expect(subtract(10, 4)).toBe(6);
});

test('multiplies 3 * 4 to equal 12', () => {
  expect(multiply(3, 4)).toBe(12);
});

test('returns true when value is positive', () => {
  expect(add(1, 1) > 0).toBe(true);
});
