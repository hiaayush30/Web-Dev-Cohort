//mechanism by which js objects inherit features from one another
//it is like a single template object that all objects inherit from without 
//having their own copy

//arr.__proto__ (reference)
//Array.prototype)actual object)

const arr=[1,2,3,4];
arr.__proto__.sayHello=function(){
    console.log(this);
}

Array.prototype.sayHi=function(){
    console.log(this);
}

const arr2=[1,2,3,4];
arr2.sayYo=function(){
    console.log('yo!');
}

arr.sayHello();
arr.sayHi();
//arr.sayYo();