//Date and time
//Date object
let myDate =new Date();

// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());          
// console.log(myDate.toLocaleString());  //good
// console.log(myDate.toUTCString());     //good

// let newDate=new Date(2023,0,23,15,30,45);
// let newDate=new Date("2023-1-15");
let newDate=new Date("01-15-2024");
// console.log(newDate.toLocaleString());

// console.log(Date.now());
// console.log(newDate.getTime());
// console.log(Math.floor(Date.now()/1000));  //time in seconds
// console.log(myDate.getDay());      //starting from 1 in day
// console.log(myDate.getMonth()+1);  //starting from index 0
// console.log(myDate.getFullYear());  
// console.log(newDate.getMonth()+1); 

console.log(newDate.toLocaleString("default",{
    weekday:"long",
    month:"long",
}));