// a new object of Promise class created which will resolve after one second
const myPromise=new Promise((res,rej)=>{
      setTimeout(()=>{
        res('yo');
      },1000);
})
//setTimeout is a callback way of calling an async fn
async function asyncFun(callback) {
    const response=await myPromise
    callback();
    console.log(response);
}
asyncFun(()=>{console.log('hello there')});

const myAsyncFn=(time)=>{
    console.log('i will resolve after '+time+" seconds!");
    return new Promise((res,rej)=>{
        setTimeout(()=>{res('resolved')},time);
    })
}

myAsyncFn(2000).then(res=>{console.log(res)});
