// index signatures
// helps us to access dynamic properties of an object
const todaysTransactions = {
    Pizza: -10,
    Job: 50,
    Sell: 20
};
const todaysTotal = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total = total + transactions[transaction];
    }
    return total;
};
console.log(todaysTotal(todaysTransactions));
const student = {
    name: 'Anna',
    GPA: 2.5,
    classes: [134, 741]
};
for (const key in student) {
    console.log(`${key}: ${student[key]}`);
}
// Object.keys -> [name, GPA, classes]
Object.keys(student).map(key => {
    console.log(key);
});
const monthlyIncome = {
    salary: 600,
    tip: 250,
    sidehustle: 200
};
export {};
//----------------------------------------------------------------------------------//
//mapped types -> a record is just a already build mapped type!
//# sourceMappingURL=main.js.map