//simple type declaration
let myName: string = 'Peter';
// union typ
let album: string | number;
// any typ kills typescript
let age: any;
// function with type safe arguments and output
const Sum = (a:number,b:number):number => {
    return a+b;
}

// any -> TypeScript trusts us completely (no type checking)
// unknown -> TypeScript requires US to check the type before using it