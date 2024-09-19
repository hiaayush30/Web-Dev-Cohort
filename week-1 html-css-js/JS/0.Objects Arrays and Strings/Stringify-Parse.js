const obj={
    name:"Aayush",
    age:20,
    Role:"ML Expert"
}
console.log("object:",obj);

let str=JSON.stringify(obj);
console.log("Stringified String: "+str);

const obj2=JSON.parse(str);
console.log(obj2["name"]);