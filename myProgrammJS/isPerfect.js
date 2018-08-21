// BEGIN
const isPerfect = num => {
  if (num <= 0) return false;
  let sum = 0;
  for (let i = 0; i < num; i++)
    if (num % i === 0) sum += i;
  return sum === num;
};
// END

export default isPerfect;
