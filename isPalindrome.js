//begin
const isPalindrome = str => {
  const iter = (i, j) => {
    if (i > j) {
      return true;
    } else {
      return str[i] === str[j] && iter(i+1,j-1);
    }
  }
  return iter(0, str.length-1);
}
export default isPalindrome;
//end
