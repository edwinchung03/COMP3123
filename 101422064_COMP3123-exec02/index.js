const greeter = (myArray, counter) =>{
    let greetText = 'Hello ';

    for (const name of myArray){
        console.log(`${greetText}${name}`)
    }
}

greeter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3); 


const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join('');

console.log(capitalize('fooBar'))
console.log(capitalize('nodeJs'))

const colors = ['red', 'green', 'blue'];

const capitalizedColors = colors.map(color => capitalize(color))

console.log(capitalizedColors);


var values = [1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(num => num < 20);
console.log(filterLessThan20)


var array = [1, 2, 3, 4];

const calculateSum = array.reduce ((acc, num) => acc + num, 0)
const calculateProduct = array.reduce ((acc, num) => acc * num, 1)

console.log(calculateSum)
console.log(calculateProduct)



class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    
    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year); 
        this.balance = balance;
    }
    
    info() {
        return `${super.model} has a balance of $${this.balance}`;
    }
}

const car2 = new Car('Pontic Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000)
console.log(sedan.info())
