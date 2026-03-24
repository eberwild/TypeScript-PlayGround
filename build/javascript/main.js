//simple type declaration
let myName = 'Peter';
// union typ
let album;
// any typ kills typescript
let age;
// function with type safe arguments and output
const Sum = (a, b) => {
    return a + b;
};
// Arrays
let namesArray = ['luffy', 'nami', 'zoro'];
let mixedArray = [42, 'Spandam', false];
// Tuple -> more strict (number of items and order matter)
let Tuple = ['peter', 42, true];
// Objects
let myObj;
myObj = [];
console.log(typeof myObj);
const User = {
    userName: 'eberwild',
    userEmail: 'myNotWorkingArcorEmail',
    age: 31,
    hasPremium: true,
};
const luffy = {
    name: 'luffy',
    crewName: 'strawhats',
    role: 'captain',
    bounty: 300000000,
    //active: true,
    crew: []
};
const getBounty = (pirate) => {
    return pirate.bounty;
};
const garp = {
    name: 'garp',
    rang: 'vice-admiral',
    active: true,
    crew: []
};
const getRang = (marine) => {
    return marine.rang;
};
// Enums -> every value enumareted
var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    // all following values will adapted 
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
export {};
//# sourceMappingURL=main.js.map