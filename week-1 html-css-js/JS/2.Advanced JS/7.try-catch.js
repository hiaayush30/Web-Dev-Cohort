function divide(a,b){
    try{
        if(b==0){
            throw new Error("kya bhai!"); //code will automatically exit try block
        }
        console.log(a/b);
    }catch(e){
        console.log(e);
    }finally{
        console.log('hey');
    }
}
divide(3,0);
divide(3,5);