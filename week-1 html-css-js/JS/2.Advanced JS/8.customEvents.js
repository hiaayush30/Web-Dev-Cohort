const myEvent=new Event('chacha');

document.querySelector('button').addEventListener('chacha',()=>{
    alert('chacha event hua!');
});

//makes the event occur
document.querySelector('button').dispatchEvent(myEvent);