let apples: number = 234;

apples = 34;

let hasName: boolean = true;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red','green']
let truths: null[] = [null,undefined]

//classes (capitalized)
class Car {

}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
};

// function     |<--  annotation  -->| 
const logNumber: (i: number) => void = (i: number) => {
    console.log(i);
    
};

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates = JSON.parse(json);
console.log(coordinates); // {x: 10, y: 20}


