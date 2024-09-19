let arr=[2,5,10,15,20,25];
console.log(arr);

arr.unshift(23);
console.log(arr);

arr.pop();
console.log(arr);

console.log(arr.includes(15));
console.log(arr.indexOf(20));

const newArr=arr.join()   //but now the newArr is a string
console.log(newArr);
console.log(typeof newArr);

console.log(arr.slice(1,3));
console.log(arr);
console.log(arr.splice(1,3));  //will remove this portion from the original array
console.log(arr);