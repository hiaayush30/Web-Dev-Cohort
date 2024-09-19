//this refers to the current context
//in node environment this in global context points to an empty object
//but in browser this in global context points to the window object
//ie window object is the global object in the browser
const user={
   name:"Aayush",
   model:"GPT-4",
   welcomeMsg:function(){
    console.log(`welcome to our website ${this.name}!`);
 }
};


//Normal functions: this is dynamic and depends on how the function is called.
//Arrow functions: this is lexical and depends on where the function is defined, not how it's called.
const Chai=function(){
 const user="Peter";
 console.log(this.user);
 console.log(this);
};
Chai();

const Chai2=()=>{
 console.log(this);
}
Chai2();
//this inside the arrow fn is the same as this outside the fn which here points to the global object

const Sum=(num1,num2)=>num1+num2;
//implicit return when not using curly braces
console.log(Sum(245,489));

const Sum2=(num1,num2)=>(num1+num2);
//this will also work FOR RETURNING OBJECTS WHICH CANT BE DONE ABOVE
const ReturnObject=()=>({
name:"Aayush",
age:21,
});
console.log(ReturnObject());

function Hello(){
console.log(this);
};
const hi=new Hello();
//Above Fn in diff scenarios will log-
//Global context: Logs the global object (or undefined in strict mode).
//As an object's method: Logs the object.
//With new keyword: Logs the new instance of the function.
//As an event handler: Logs the event target element.
//With call, apply, or bind: Logs the explicitly bound object.
