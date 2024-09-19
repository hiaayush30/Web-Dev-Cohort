//this changes its meaning in different conditions
//in global - window  
//in function - window
//in method(fn of an object) - object
//in fn inside method (es5) - window   
  // var obj = {
  //     yo: function () {
  //         console.log(this.age)
  //         function yo2() { console.log(this); }
  //         yo2();
  //     },
  //     age:20
  // }
  // obj.yo();
//in (arrow)fn inside method (es6) - object
 //arrow fn mn this ki value parent se aati hn**
    var obj = {
      yo: function () {
          console.log(this.age)
          const yo2=()=>{console.log(this)};
          yo2();
      },
      age:20
  }
  obj.yo();
//in constructor fn(called using 'new') - new blank object
//in event listener - element on which the event is applied
   document.querySelector('button').addEventListener('click',()=>{
    console.log(this);
   })