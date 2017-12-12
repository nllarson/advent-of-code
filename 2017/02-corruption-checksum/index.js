const checksum = input => {
  const diffs = input.map(entry => {
    const array = entry
      .toString()
      .trim()
      .split("")
      .map(value => {
        return parseInt(value);
      });
    return Math.max(...array) - Math.min(...array);
  });
  return diffs.reduce((total, num) => total + num);
};

export { checksum };
