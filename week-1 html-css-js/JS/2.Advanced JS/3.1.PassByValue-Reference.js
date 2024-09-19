//There are 2 types of values-Primitives and Objects

//Primitives-Number,Boolean,String,NUll,Undefined
// a=1;b=1 then a===b =>true 
// a='aayush'or{};b='aayush'or{} then a===b =>true 

//in Js  primitives point towards the actual value while Object(like aaray) point to the address of the value and not the value itself
//and the value is created from scratch

//Objects-Object,Array,Function,Date,Regex
// a=[1];b=[1] then a===b =>false

//Examples
//1
// function change(num){
//     num=10;
// }
// let num=12;
// change(num);
// console.log(num);

//2
// function change({num}){
//     num=10;
// }
// let obj={num:12};
// change(obj.num);
// console.log(obj.num);

//3
// const a ={name:"aayush"};
// const b=a;
// b.name='henry'
// console.log(a);
   