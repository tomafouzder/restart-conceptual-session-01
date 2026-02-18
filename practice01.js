// var name1 = 'PH';
// console.log(name1);


// var name1 = 'Next Level';
// console.log(name1);


// if (true) {
//     var text = 'Next One';
// }
// console.log(text);


// if (true) {
//     let text = 'Next One';
// }
// console.log(text);  Error case


// if (true) {
//     let text = 'Next One';
//     console.log(text);   //not error
// } 


// Let and Const most useable case
// let text;
// text = "Hero Alom";

// if (true) {
//     text = " Technology"
//     console.log(text);
// }


// const data = 20;
// if(true){
//     data = 50;   //not re-assignment 
//     console.log(data);

// }


// Data type: 
// 1. Primitive -> Number, string, null, undefine, boolean(true, false);
// 2. Non - primitive -> array [] , object{}

//Primitive:
// const age = 20;
// console.log(typeof age)  //number

// const age = '20';
// console.log(typeof age)  //string

// const isActive = true;
// console.log(typeof isActive)  //boolean

// const data = null;
// console.log(typeof data)  // object but null is primitive data type 


// let x;
// console.log(typeof x);  // whe we not declare variable value then it's result is Undefine 


// Non-primitive :
const arr = [1, 2, 3, 4]
// console.log(typeof arr);  //object

// console.log(Array.isArray( arr));  //true

// console.log(Array.isArray(typeof arr));  //false

// index of array:
// console.log(arr[0]);  // 1
// console.log(arr[3]);  // 4
// console.log(arr[1]);  // 2
// console.log(arr[5]);  // undefine

// console.log(arr.length);  // 4

// Object :
// const student = {
//     name: "Hero",
//     age: 21,
//     location: {
//         city: 'Bandorbon',
//         village: " with some Katabon",
//     },
// };
// console.log(typeof student);  //object


// Type conversion :
const num = 20;
// console.log(typeof num);  //number
// console.log(typeof String(num));  //string

const num2 = '20';
// console.log(num2); // string
// console.log(typeof Number(num2)); // number

// if (num === num2) {
//     console.log(true);  
// }else{
//     console.log(false); // false
// }


// if (num == num2) {
//     console.log(true); // true 
// }else{
//     console.log(false);   
// }

const sum = 20 + '20';
// console.log(sum);  //string -> 2020

const sum1 = 20 + 20;
// console.log(sum1);  //40

//Ternary operator  :
// const result = (num == num2) ? "Equal" : "Not Equal";  // equal
// const result = (num === num2) ? "Equal" : "Not Equal";  // not equal
// const result = (num !== num2) ? "Equal" : "Not Equal";  // answer is not equal but ! sing is reverse this value, now answer is equal

// const result = (num === num2) ? "Equal" : "Not Equal"; 
// console.log(!result);  // false

// const result = (num === num2) ? "Equal" : "Not Equal"; 
// console.log(!!result);   //true


// < , >
const marks = 93;
// const marks = 22;
// if (marks > 33){
//     console.log("Pass this exam");
// }else{
//     console.log("Fail this exam");
// }

if (marks < 33) {
    console.log("F");
} else if (marks >= 33 && marks <= 39) {
    console.log("D");
} else if (marks >= 40 && marks <= 49) {
    console.log("C");
} else if (marks >= 50 && marks <= 59) {
    console.log("B");
} else if (marks >= 60 && marks <= 69) {
    console.log("-A");
} else if (marks >= 60 && marks <= 79) {
    console.log("A");
} else if (marks >= 80 && marks <= 89) {
    console.log("A+");
} else {
    console.log("Golden A+");
}




