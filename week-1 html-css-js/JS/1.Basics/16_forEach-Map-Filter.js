const arr=[5,10,15,20,25];

arr.forEach((e,index,arr)=>{
  //console.log(`The element is ${e} on index ${index}`);
  //console.log(arr);
});

const values=arr.map((e)=>{
  return e+1;
})
console.log(values);

const result=arr.filter((e)=>e>10);
console.log(result);

//const initialVal=0;
//arr.reduce(accumilator,currentVal)=>accumilator+currentVal,initialVal);
//initialVal is used only once for initializing the accumilator-default is 0
const sum=arr.reduce((e1,e2)=>{return e1+e2},10);
console.log(sum);
