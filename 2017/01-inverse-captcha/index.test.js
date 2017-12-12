import { sum1 } from "./";
import data from "./input.json";

describe("Day 1", () => {
  describe("Problem 1", () => {
    test("1122 produces a sum of 3", () => {
      const answer = sum1(1122);
      expect(answer).toBe(3);
    });

    test("1111 produces a sum of 4", () => {
      const answer = sum1(1111);
      expect(answer).toBe(4);
    });

    test("1234 produces a sum of 0", () => {
      const answer = sum1(1234);
      expect(answer).toBe(0);
    });

    test("91212129 produces a sum of 9", () => {
      const answer = sum1(91212129);
      expect(answer).toBe(9);
    });

    test("Problem 1 Input - produces a sum of 995", () => {
      const answer = sum1(data.input);
      expect(answer).toBe(995);
    });
  });
});
