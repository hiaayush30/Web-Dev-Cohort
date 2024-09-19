//These are 3 ways to call a function kisi object ko 'this' maan kar

//1>>Call
const obj={name:"Aayush"}
// function abcd(){
//     console.log(this)
// };
//abcd.call(obj)
//abcd.call() by default will give window 

function abcd(a,b,c){
    console.log(this,a,b,c)
};
abcd.apply(obj,[1,2,3])
//2>>1st arg is the reference for this and the second is an array of arguments for the parameters

//you can do the same in call bu the arguments are not passed in array
// abcd.call(obj,1,2,3);

//3>>bind is similar to call but it returns a function to run later instead of running it immediately
//unlike call
const customfn=abcd.bind(obj,45,56,50);
customfn();
