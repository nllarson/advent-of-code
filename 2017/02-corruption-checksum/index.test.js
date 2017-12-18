import { checksum, checksum2 } from "./";
import data from "./input";

describe("Day 2", () => {
  describe("Problem 1", () => {
    const inputs = [
      ["sample input", `5 1 9 5\n7 5 3\n2 4 6 8`, 18],
      ["puzzle input", data, 53460]
    ];

    inputs.forEach(([name, input, output]) => {
      test(`${name} output should be ${output}`, () => {
        expect(checksum(input)).toBe(output);
      });
    });
  });

  describe("Problem 2", () => {
    const inputs = [
      ["sample input", `5 9 2 8\n9 4 7 3\n3 8 6 5`, 9],
      ["puzzle input", data, 282]
    ];

    inputs.forEach(([name, input, output]) => {
      test(`${name} output should be ${output}`, () => {
        expect(checksum2(input)).toBe(output);
      });
    });
  });
});
