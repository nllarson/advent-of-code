import { checksum } from "./";
import data from "./input.json";

describe("Day 2", () => {
  describe("Problem 1", () => {
    const inputs = [
      ["sample input", [5195, 753, 2468], 18],
      [
        "zero sum input",
        [1111, 111, 99999999, 888, 222, 22222222, 8888888888, 9999999, 99],
        0
      ],
      [
        "longer input",
        [
          1364,
          461,
          1438,
          1456,
          818,
          999,
          105,
          1065,
          314,
          99,
          1353,
          148,
          837,
          590,
          404,
          123
        ],
        79
      ],
      ["puzzle input", data.input, 99]
    ];

    inputs.forEach(([name, input, output]) => {
      test(`${name} output should be ${output}`, () => {
        expect(checksum(input)).toBe(output);
      });
    });
  });
});
