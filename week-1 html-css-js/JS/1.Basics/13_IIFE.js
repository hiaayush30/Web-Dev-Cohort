//this is known as named IIFE
(function Chai(){
 console.log("Have some Chai!");
})();//semi colon imp to tell where IIFE should stop the cotext 
//else the second IIFE will not run so we have to end it by ;

((name)=>{
 console.log("This is the second IIFE!,welcome "+name);
})("Aayush");
