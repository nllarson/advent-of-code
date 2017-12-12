const nextIndex1 = (idx, array) => {
  return idx + 1 >= array.length ? 0 : idx + 1;
};

const nextIndex2 = (idx, array) => {
  const count = array.length / 2;
  return idx + count >= array.length ? idx + count - array.length : idx + count;
};

const sum = (input, getNextIndex) => {
  return input
    .toString()
    .split("")
    .map(data => {
      return parseInt(data);
    })
    .reduce((total, num, idx, array) => {
      return num === array[getNextIndex(idx, array)] ? (total += num) : total;
    }, 0);
};

const sum1 = input => {
  return sum(input, nextIndex1);
};
const sum2 = input => {
  return sum(input, nextIndex2);
};

export { sum1, sum2 };
