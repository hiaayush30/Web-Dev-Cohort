function one(){
const username="hitesh";

  function two(){
  const website="youtube";
  console.log(username);
  }
two();
//console.log(website);
}
one();

//------------------------------------
function Addone(num){
return num+1;
}

console.log(Addone(5));

//this syntax is known as function expression
//is the same like previous function BUT NO HOISTING DONE HERE!
const Addtwo=function (num){
return num+2;
}


