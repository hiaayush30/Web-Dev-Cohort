console.log("hello");
// const myFn=async function(){
//     const blob=await fetch('https://sum-server.100xdevs.com/todos');
//     const res=await blob.json();
//     console.log(res);
//     console.log("Hello from async fn!");
// }
// myFn()
// setTimeout(()=>{
//     console.log('Hello from setTimeout!');
// },10)

const myPromise=new Promise((resolve, reject) => {
    reject('denied');
})
myPromise.then((res)=>{console.log('resolved::',res)}).catch((err)=>{console.log('rejected::',err)})
;(async function(){
    try{
        const res=await myPromise;
        console.log(res)
    }catch(e){
        console.log(e);
    }
})();
console.log("hello again!");