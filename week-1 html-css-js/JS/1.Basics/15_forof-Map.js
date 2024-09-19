//forof works on array and Map objects but not on object
let arr=[5,10,15,20,25];

let obj={
name:"Aayush",
age:21,
course:"BCA"
};

for(const element of arr){
   //console.log(element);
};

for(const key in obj){
  //console.log(key);
  console.log(obj[key]);
};

const greeting="Hello World!";
for(const letter of greeting){
  //console.log(letter)
}

//Map object-holds key-value pairs and remembers the original insertion order of the keys
//they are no iterable using forin 
const map=new Map();
map.set('IN',"India");
map.set("USA","United States of America");
map.set("FR","France");

for(const key of map){
 //console.log(key);
}
for(const [key,value] of map){
//console.log(`key:${key},value:${value}`);
}

