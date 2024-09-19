//Primitives and Non Primitives are decided on the basis of how these data are stored(stack/heap) and
// accessed(copy/refernece)

// Primitive datatypes  (pass by value ie value stored in stack)
//  number
//  boolean
//  bigint
//  string
//  null
//  undefined
//  symbol

// Non-Primitive datatypes (pass by reference ie value stored in heap)
//  Array 
//  Function
//  Object

// Type coercion in JavaScript is the process of converting a value from
// one type to another. This can happen implicitly (automatically) or explicitly (manually).
let name="Aayush";
console.log(Number(name));  
console.log(typeof Number(name));

let age=null;
console.log(Number(age))

let num=undefined;
console.log(Number(num));

console.log("1"+2+2);  //evaluated from L to R
console.log(1+2+"2");

console.log(null>0);  
console.log(null==0);
console.log(null>=0);
//comparisons(>,<=,<,>=) convert null to a number ie 0 (unlike in equality check)

const bigNum=12312313413123231n; //bigint





