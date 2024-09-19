//Number and Maths
const score=500;

const balance =new Number(600.00000000);

// console.log(score);
// console.log(balance);
// console.log(balance.toFixed(2));

// let num=10.86523;
// console.log(num.toPrecision(5))  //3 is the number of values to focus on
// num=800.3456
// console.log(num.toPrecision(2))

// const hundreds=1000000;
// console.log(hundreds.toLocaleString())   //default is international numbering system;
// console.log(hundreds.toLocaleString("en-IN"));

// console.log(Number.MAX_SAFE_INTEGER);
// ----------------------------------------------------------------------------------------
//Math library of JS

console.log(Math);
console.log(Math.abs(-2));
console.log(Math.round(4.54));
console.log(Math.ceil(2.1));
console.log(Math.floor(4.9));
let arr=[20,25,30]
console.log(Math.min(...arr));

console.log(Math.random());
console.log(Math.random()*10);  //can still give 0 ex 0.04
console.log((Math.random()*10)+1);

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min) 