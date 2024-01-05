const calculator = require('./calculator');

describe("add", () => {
    test("adds 0 and 0", () => {
      expect(calculator.add(0, 0)).toBe(0);
    });
});

describe("multiply", () => {
    test("multiply 10 and 5", () => {
      expect(calculator.multiply(10, 5)).toBe(50);
    });
});

describe("divide", () => {
    test("divide 100 and 5", () => {
      expect(calculator.divide(100, 5)).toBe(20);
    });
});

describe("minus", () => {
    test("minus 20 and 2", () => {
      expect(calculator.minus(20, 2)).toBe(18);
    });
});