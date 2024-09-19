//Display Current Date
// let a=setInterval(()=>{
//     const yo=new Date;
//     console.log(`Time: ${yo.getHours()} Hrs ${yo.getMinutes()} Min ${yo.getSeconds()} Secs`);
// },1000)
// setTimeout(()=>{clearInterval(a)},31000)


//Count from 1 to 30
let count=1;
let a=setInterval(()=>{
    console.log(count);
    count++;
},1000)
setTimeout(()=>{clearInterval(a)},31000)