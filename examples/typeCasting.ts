type StringNumber = string | number
const addOrConcat = (input1: number, input2: number, operation: 'add'| 'concat' ): StringNumber => {
    return operation === 'add' ?
    input1 + input2
    :
    "" + input1 + input2;
}
// cast to a more specific type -> as = we know better than TS what is going to be returned
const myInput: string = addOrConcat(2,3,'concat') as string;
// casting can be dangerous -> here a string will be returned but we defined it as a number
const myInput2: number = addOrConcat(2,3,'concat') as number;

// double casting / forced casting with unknown type
(10 as unknown) as string

// working with the DOM
// img can be null , so we tell TS that we know that this img is a HTMLImageElement
const img = document.querySelector('img') ! ;
// ! at the end -> not null casting - if we know that we will not get null as a return
const myImg = document.getElementById('#img') as HTMLImageElement;
img.src
myImg.src

// exercise code -> selecting a span element and changing the inner text
let year: HTMLElement | null 
year = document.getElementById('year') as HTMLSpanElement;

let currentYear: string 
currentYear = new Date().getFullYear().toString();

year.setAttribute('yeartime' , (currentYear));
year.textContent = (currentYear);