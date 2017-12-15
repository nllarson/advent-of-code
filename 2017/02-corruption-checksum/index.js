const checksum = input => {
  const diffs = input
    .trim()
    .split("\n")
    .map(line => line.split(/\s+/g).map(value => parseInt(value)))
    .map(array => {
      return Math.max(...array) - Math.min(...array);
    });
  return diffs.reduce((total, num) => total + num);
};

export { checksum };
