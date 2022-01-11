import calculator from "../code/calculator";

it("Takes two numbers and return the correct calculation", () => {
  expect(calculator.add(2, 14)).toBe(16);
});
it("Takes two numbers and return the correct calculation", () => {
  expect(calculator.subtract(2, 14)).toBe(-12);
});
it("Takes two numbers and return the correct calculation", () => {
  expect(calculator.divide(14, 2)).toBe(7);
});
it("Takes two numbers and return the correct calculation", () => {
  expect(calculator.multiply(2, 14)).toBe(28);
});
