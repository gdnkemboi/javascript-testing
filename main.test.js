const { capitalize, reverseString, Calculator, analyzeArray } = require("./main.js");

test("capitalizes first character in string", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverses string", () => {
  expect(reverseString("hello")).toBe("olleh");
});

describe("Calculator", () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  test("Adds two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
  });

  test("Subtracts the second number from first number", () => {
    expect(calculator.subtract(3, 1)).toBe(2);
  });

  test("Divides first number by second number", () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });

  test("Multiplies first number by second number", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
  });
});

describe("Analyze array", () => {
  test("returns average, min, max, and length of array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6
    });
  });
});
