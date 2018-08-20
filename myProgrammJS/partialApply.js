// BEGIN
const partialApply = (func, a) => b => func(b, a);
export default partialApply;
// END
