//for loop
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("-------");

//while loop

let number = 2;

while(number <= 10) {
    console.log(number);
    number += 2;
}

console.log("--------");

//do while loop

number = 1;

 do {
    console.log(number);
    number++;
 } while(number <= 5);

 console.log("--------");

 //for of (array)

 let numbers = [22, 33, 545, 664, 887];

 for(let number of numbers) {
    console.log(number);
 }

 console.log("---------");

//for in (array)

 for(let number in numbers) {
    console.log(number);
 }

 console.log("---------");

 //for of (object)

 const person = {
    name: "Seth",
    age: 30,
    city: "Bham" 
 };

for(let property of Object.values(person)) {
    console.log(property);
}

console.log("---------");

for(let property of Object.keys(person)) {
    console.log(property);
}

console.log("---------");

//for in (object)

for(let property in person) {
    console.log(property);
}

console.log("---------");

for(let property in person) {
    console.log(person[property]);
}