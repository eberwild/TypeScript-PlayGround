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
// Arrays
let namesArray: string[] = ['luffy' , 'nami' , 'zoro'];
let mixedArray: (string | number | boolean)[] = [42 , 'Spandam' , false];

// Tuple -> more strict (number of items and order matter)
let Tuple: [string , number , boolean] = ['peter' , 42 , true]

// Objects
let myObj : object;
myObj = [];
console.log(typeof myObj);

const User = {
    userName: 'eberwild',
    userEmail: 'myNotWorkingArcorEmail',
    age: 31,
    hasPremium: true,
}
// type annotations 
type Pirate = {
    name: string,
    crewName: string,
    role: string,
    bounty: number,
    // optional property (either boolean | undefined)
    active?: boolean,
    crew: Pirate[]
}
const luffy: Pirate = {
    name: 'luffy',
    crewName: 'strawhats',
    role: 'captain',
    bounty: 300000000,
    //active: true,
    crew: []
}
const getBounty = (pirate: Pirate) => {
    return pirate.bounty;
}

// interfaces -> better for an object structure (inheritance etc.)
//            -> cannot use union types
interface Marine {
    name: string,
    rang: string,
    active: boolean,
    crew: Marine[]
}
const garp: Marine = {
    name: 'garp',
    rang: 'vice-admiral',
    active: true,
    crew: []
}
const getRang = (marine: Marine) => {
    return marine.rang;
}

// Enums -> every value enumareted
enum Grade {
    U = 1,
    // all following values will adapted 
    D,
    C,
    B,
    A
}
console.log(Grade.A)

