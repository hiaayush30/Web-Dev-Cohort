const thenable = {   //it is just another object with a key called then
    //but you can await the then
    then: function(onFulfilled) {
      setTimeout(() => onFulfilled(42), 1000);
    }
  };
  console.log(thenable);
  async function main(){
   await thenable;
   console.log('hi there!');

  }
  main();
  // Every Promise is a thenable
  //Every thenabe is not a promise