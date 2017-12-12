const getNext = (idx, array) => {
  const nextIndex = idx + 1;
  if (nextIndex >= array.length) {
    return array[0];
  } else {
    return array[nextIndex];
  }
};

const sum1 = input => {
  return input
    .toString()
    .split("")
    .map(data => {
      return parseInt(data);
    })
    .reduce((total, num, idx, array) => {
      const next = getNext(idx, array);
      if (num === next) {
        total += num;
      }
      return total;
    }, 0);
};

export { sum1 };
