export default (str) => {
  // BEGIN
  const len = str.length-1;
  const iter = (num, acc) => {
    if (str[num] === undefined)
      return acc;
    acc += str[len-num];
    return iter(num+1, acc);
  }
  // END

  return iter(0, '');
};
