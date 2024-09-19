//closure - a fn which returns another fn and uses some variable of the parent fn
//the fn ie counter gets removed from stack once it returns the fn but the returned fn 
//also contains the environment (variables in counter ) ie lexical scope of counter fn
function counter(){
    let count=0;
    return function(){
        count++;
        console.log(count);
    }
}
const fn=counter();
fn();
fn();
fn();

function timer(){
    const a =12;
    return setTimeout(()=>{console.log(a)},2000)
};
timer();