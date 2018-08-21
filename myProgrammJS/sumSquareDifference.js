// BEGIN
const sumSquareDifference = n => {
  if (n <= 0) return 0;

  let squareSum = 0;
  let sum = 0;

  for (let i = 1; i <= n; i++){
    squareSum += i**2;
    sum += i;
  }
  return sum**2 - squareSum;
}
// END

export default sumSquareDifference;
