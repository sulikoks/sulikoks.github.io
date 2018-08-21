// BEGIN
const compose = (f, g) => arg => f(g(arg));

export default compose;
// END
