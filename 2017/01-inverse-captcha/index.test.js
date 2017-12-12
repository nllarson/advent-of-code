import { sum1, sum2 } from "./";
import data from "./input.json";

describe("Day 1", () => {
  describe("Problem 1", () => {
    test("1122 produces a sum of 3", () => {
      expect(sum1(1122)).toBe(3);
    });

    test("1111 produces a sum of 4", () => {
      expect(sum1(1111)).toBe(4);
    });

    test("1234 produces a sum of 0", () => {
      expect(sum1(1234)).toBe(0);
    });

    test("91212129 produces a sum of 9", () => {
      expect(sum1(91212129)).toBe(9);
    });

    test("Input - produces a sum of 995", () => {
      expect(sum1(data.input)).toBe(995);
    });
  });

  describe("Problem 2", () => {
    test("1212 produces a sum of 6", () => {
      expect(sum2(1212)).toBe(6);
    });

    test("1221 produces a sum of 0", () => {
      expect(sum2(1221)).toBe(0);
    });

    test("123425 produces a sum of 4", () => {
      expect(sum2(123425)).toBe(4);
    });

    test("123123 produces a sum of 12", () => {
      expect(sum2(123123)).toBe(12);
    });

    test("12131415 produces a sum of 4", () => {
      expect(sum2(12131415)).toBe(4);
    });

    test("Input - produces a sum of 1130", () => {
      expect(sum2(data.input)).toBe(1130);
    });
  });
});
