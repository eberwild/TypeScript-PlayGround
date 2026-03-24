// literal types
let myName;
let userStatus;
// functions
// function with return value
const add = (a, b) => {
    return a + b;
};
// function with no return value
const logMsg = (message) => {
    console.log(message);
};
// interface mathFunction {
//  (a: number, b:number): number
//}
const sub = function (x, y) {
    return x - y;
};
// optional parameters
const addAll = (a, b, c) => {
    return typeof c === 'undefined' ?
        a + b
        :
            a + b + c;
};
// default parameters
const sumAll = (a, b, c = 2) => {
    return a + b + c;
};
// Rest parameters
const total = (...nums) => {
    nums.reduce((prev, curr) => prev + curr);
};
// Never type -> function that throw an error or infinite loops in functions
const createError = (message) => {
    throw new Error(message);
};
export {};
//# sourceMappingURL=main.js.map