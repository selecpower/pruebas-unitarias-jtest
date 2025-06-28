const calculator = require("./calculator");

test("adds 1 + 2 to equal 3", () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test("adds -4 + 8 to equal 4", () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test("subtract 5 - 4 to equal 1", () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test("subtract -5 - -10 to equal 5", () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
test("divides 6 / 3 to equal 2", () => {
  expect(calculator.divide(6, 3)).toBe(2);
});
test("divides 10 / 2 to equal 5", () => {
  expect(calculator.divide(10, 2)).toBe(5);
});
test("multiplies 3 * 4 to equal 12", () => {
  expect(calculator.multiply(3, 4)).toBe(12);
});
test("multiplies -2 * 5 to equal -10", () => {
  expect(calculator.multiply(-2, 5)).toBe(-10);
});
test("multiplies 100 * 0 to equal 0", () => {
  expect(calculator.multiply(0, 100)).toBe(0);
});
test("divides 10 / 0 to equal 0", () => {
  expect(calculator.divide(0, 100)).toBe(0);
});
