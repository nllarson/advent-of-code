// For each line, determine the difference between the largest value and the smallest value
const difference = line => {
  return Math.max(...line) - Math.min(...line);
};

// For each line, find where the result of the division operation is a whole number, and divide them
const quotient = line => {
  return line
    .map((number, index, array) => {
      const divisor = array.find((elem, idx) => {
        return index !== idx && number % elem === 0;
      });

      return (divisor !== undefined && number / divisor) || 0;
    })
    .reduce((total, num) => total + num);
};

const determineChecksum = (input, condenser) => {
  const values = input
    .trim()
    .split("\n")
    .map(line => line.split(/\s+/g).map(value => parseInt(value)))
    .map(condenser);
  return values.reduce((total, num) => total + num);
};

const checksum = input => determineChecksum(input, difference);
const checksum2 = input => determineChecksum(input, quotient);

export { checksum, checksum2 };
