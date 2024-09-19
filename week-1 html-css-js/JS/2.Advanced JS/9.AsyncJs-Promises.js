//Async JS
 //Promise
 //setTimeout
 //setInterval
 //Fetch
 //Axios
 //Promise

const myAsyncFn=function(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve('resolved!');
            // reject('rejected!');
        }, 1000);
    })
}

//handling via then catch
// const response=myAsyncFn().then((response)=>{
//     console.log(response);
// }).catch(err=>{
//     console.log('error::'+err);
// })

// handling via async await
async function callAsyncFn(){
    try{
        const res=await myAsyncFn();
        const response=await fetch('yo');
        const data=response.text()
        //if promise is resolved
        console.log('promise resolved!');
        console.log(res);
    }catch(err){
        //if promise is rejected
        console.log('err::'+err);
    }
}
callAsyncFn();


console.log('hi')