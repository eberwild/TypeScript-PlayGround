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
