//object destructuring

const obj={
name:"Aayush",
age:21,
hobby:"coding"
};

const {name}=obj; 
console.log(name);

const {hobby:likes}=obj;
console.log(likes);
