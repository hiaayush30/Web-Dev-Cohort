// Objects created using Object.create()/new Object() are singleton objects
//un;ike objects created using literals

const mySymbol=Symbol("key1");
const obj={
    name:"Aayush",  //the key itself is stored as a string
    "full name":"Aayush Jha",
    age:21,
    [mySymbol]:"mySymbol1", //[] used to use Symbol in object
    email:"aayush@gmail.com"
}

console.log(obj.name);
console.log(obj["name"]);
// console.log(obj.full name) wrong
console.log(obj[mySymbol]);

// obj.email="aayush@chatgpt.com";
// Object.freeze(obj);
// obj.email="aayush@yahoo.com";
// console.log(obj.email);

obj.greeting=function(){
    console.log(`Hello Js user,the name stored in this object is ${this.name}`);
}

console.log(obj.greeting());

