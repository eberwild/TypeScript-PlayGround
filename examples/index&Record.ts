// index signatures
// helps us to access dynamic properties of an object

// interface with index / key signatures
/*interface TransactionObject {
    // the key is a string -> value is a number ( for any property )
    [key: string]: number
}
*/

// allows more than 3 props inside an object of this interface
interface TransactionObject {
    [key: string]: number
    // from here on props are a must have inside the object - everything else is optional
    Pizza: number
    Job: number
    Sell: number
}

const todaysTransactions: TransactionObject = {
    Pizza: -10,
    Job: 50,
    Sell: 20
}

const todaysTotal = (transactions: TransactionObject): number => {
    let total = 0;
    for(const transaction in transactions) {
        total = total + transactions[transaction]!
    }
    return total;
}
console.log(todaysTotal(todaysTransactions));

//----------------------------------------------------------------------------------//
interface Student {
    [key: string]: number | string | number[] | undefined
    name: string
    GPA: number
    classes?: number[]
}

const student:Student = {
    name: 'Anna',
    GPA: 2.5,
    classes: [134 , 741]
}

for (const key in student){
    console.log(`${key}: ${student[key]}`);
}

// Object.keys -> [name, GPA, classes]
Object.keys(student).map(key => {
    console.log(key)
})

//----------------------------------------------------------------------------------//
interface Income {
    // we are not able to provide a literal type as the value of key
    // index signatures only allow : string , numbers , symbols - no string literals
    // --> [key: Streams]: number = not working
    // for that we use the utility type Record
    [key: string]: number
}

type Streams = 'salary' | 'tip' | 'sidehustle'
// Record -> defines concrete keys 
type Incomes = Record <Streams, number>

const monthlyIncome: Incomes = {
    salary: 600,
    tip: 250,
    sidehustle: 200
}

//----------------------------------------------------------------------------------//
//mapped types -> a record is just a already build mapped type!



