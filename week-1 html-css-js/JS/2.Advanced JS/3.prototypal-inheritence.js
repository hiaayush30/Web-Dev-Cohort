function makeHuman(name,age){
    this.name=name;
    this.age=age;
    let calc=12*3;  //this will not get assigned to the created objects
}

const h1= new makeHuman('Aayush',21);
//when we call a fn in which we have used 'this' using 'new' keyword,it creates a new object 
//and 'this' inside the fn points to the blank object
console.log(h1);


//prototypal inheritence
makeHuman.prototype.printMyName=function(){ 
    console.log(this.name);
}
//instead of writing this method in the constructor fn where then all objects would have a 
//seperate copy of the fn increasing memory,we set it as the inherent property of the constructorr fn
//itself which all objects created from it will possess


h1.printMyName();
