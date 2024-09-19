//stack memory used for primitive types ie pass by value here
//heap memory used for non primitives ie pass by reference here  ex array,objects,functions

// let primitiveVal="yo";
// let anotherPrimitive=primitiveVal;
// anotherPrimitive="hey";
// console.log(primitiveVal);
// console.log(anotherPrimitive);

// let user1={
//     name:"Aayush",
//     age:21
// }
// let user2=user1;
// user2.age=20;

// console.log(user1);
// console.log(user2);
// ---------------------------------------------------------------
let str=new String("Advay");
//String is an object having key value pairs

console.log(str[0]);
console.log(str.__proto__);
//prototype is an object having methods in key value pairs
console.log(str.toUpperCase());
console.log(str.charAt(2));

let str2="the-batman";
console.log(str2.substring(0,3));
console.log(str2.slice(0,3));
//slice unlike substring can also process negative values

console.log(str2.replace("the-","yo "))
console.log(str2.includes("yo"));
console.log(str2.split('-'));

const str3="Aayush";
console.log(str.concat(str3));