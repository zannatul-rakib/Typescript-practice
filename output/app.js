"use strict";
// // Enum Types
// enum RType {
//   SUCCESS,
//   FAILURE,
//   FORBIDDEN,
// }
// interface APIResponse<T> {
//   status: number;
//   type: RType;
//   data: T;
// }
// const response: APIResponse<object> = {
//   status: 400,
//   type: RType.FAILURE,
//   data: {
//     name: "Shakib",
//     age: 78,
//   },
// };
// console.log(response);
// // Generics
// const addID = <T extends object>(obj: T) => {
//   let id = Math.floor(Math.random() * 100);
//   return { ...obj, id };
// };
// let user = addID({
//   name: "Shakib",
//   age: 90,
// });
// interface APIResponse<T> {
//   status: number;
//   type: string;
//   data: T;
// }
// const response: APIResponse<object> = {
//   status: 400,
//   type: "Error",
//   data: {
//     name: "Shakib",
//     age: 78,
//   },
// };
// // function signature
// let myFunc: () => void;
// let add: (x: number, y: number) => number;
// add = (a, b) => {
//   return a + b;
// };
// let calculation: (x: number, y: number, z: string) => number;
// calculation = (a, b, c) => {
//   if (c === "add") {
//     return a + b;
//   } else if (c === "minus") {
//     return a - b;
//   } else if (c === "multiply") {
//     return a * b;
//   } else {
//     return a / b;
//   }
// };
// console.log(calculation(7, 9, "multipl"));
// // type Alias
// type strOrNum = string | number;
// type userType = { name: string; age: number };
// const userDetails = (id: strOrNum, user: userType) => {
//   console.log(`User id is ${id}, name is ${user.name} and age is ${user.age}`);
// };
// const sayHello = (user: userType) => {
//   console.log(`hello ${user.age > 50 ? "sir" : "Mr"} ${user.name}`);
// };
// // Function Type
// let myFunc: Function;
// myFunc = () => {
//   console.log("hello");
// };
// //function parameter
// const greetings = (a: string, b: string, cn
// };
// console.log(malbro());
// dynamic type or any type
// let a: any;
// let b: any[] = [];
// let c: {
//   name: any,
//   age: any
// }
// Explicit and Union type
// let a: string | number;
// let b: (string | number)[] = [];
// let c: {
//   name: string;
//   age: number;
//   adult: boolean;
// };
// function multiply(a : number, b : number) {
//   return a * b;
// }
// console.log(multiply("hello", 38));
// let hello;
// console.log(hello);
// hello = "Shakib";
// hello = 73;
// console.log(hello);
// let playerName = "rakib";
// let age = 45;
// age = "kksjd";
// console.log(age)
// let playerName = "Kishor";
// console.log(playerName);
// playerName = 35;
// console.log(playerName)
// console.log("hello");
// const country = "I love Bangladesh";
// console.log(country);
// const myFunc = () => {
//   console.log("there is function");
// };
// myFunc();
