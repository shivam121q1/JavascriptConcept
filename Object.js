//Object Destructing
const course ={
    coursename: "Js in Hindi",
    price: "999",
    courseIntructor: "hitesh"
}
//
const {courseIntructor} = course
const {courseIntructor: instructor} = course
console.log(courseIntructor);
console.log(instructor);
let a, b, rest;
[a, b] = [10, 20];

console.log(a);
// Expected output: 10

console.log(b);
// Expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// Expected output: Array [30, 40, 50]

//Destructuring
var names = ["alpha", "beta", "gamma", "delta"];
var firstName = names[0]; 
var secondName = names[1];
console.log(firstName);
console.log(secondName);