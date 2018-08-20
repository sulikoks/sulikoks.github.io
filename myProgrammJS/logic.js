export const If = func => arg1 => arg2 => func(arg1)(arg2);
export const True = a => b => a;
export const False = a => b => b;
