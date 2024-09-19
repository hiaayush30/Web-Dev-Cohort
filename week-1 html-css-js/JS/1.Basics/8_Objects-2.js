const obj1={1:"a",2:"b",3:"c"};
const obj2={4:"d",5:"e",6:"f"};

// const newObj={obj1,obj2};
// const newObj={...obj1,...obj2};   //best way in most cases
// const newObj={...obj1,...obj2};   //best way

const newObj=Object.assign({},obj1,obj2);//first arg is the target which here is an empty object,rest are src
//it changes the target object as well so if we directly use first object as target-
// const newObj=Object.assign(obj1,obj2); 
// console.log(newObj);
// console.log(obj1);
// console.log(obj2);
// ---------------------------------------------------------------------------------------------

console.log(Object.keys(obj1));  //will return an array 
console.log(Object.values(obj1));  
// console.log(Object.entries(obj1)); array of arrays each having key and value as elements

console.log(obj1.hasOwnProperty("1"));
console.log(obj1.hasOwnProperty("age"));
