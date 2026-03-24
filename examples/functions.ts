// literal types
let myName: 'Peter';
let userStatus : 'active' | 'idle' | 'inactive';

// functions
// function with return value
const add = (a: number,b: number): number => {
    return a + b;
}
// function with no return value
const logMsg = (message: any): void => {
    console.log(message);
}
type mathFunction = (a: number, b:number) => number;
// interface mathFunction {
//  (a: number, b:number): number
//}
const sub: mathFunction = function (x,y) {
    return x - y;
}

// optional parameters
const addAll = (a: number, b:number, c?: number): number => {
    return typeof c === 'undefined' ? 
        a + b 
        :
        a + b + c
}

// default parameters
const sumAll = (a: number, b: number, c: number = 2): number => {
    return a + b + c;
}

// Rest parameters
const total = (...nums: number[]) => {
    nums.reduce((prev , curr) => prev + curr);
}

// Never type -> function that throw an error or infinite loops in functions
const createError = (message: string): never => {
    throw new Error(message);
}