
//factory fn - reduces repeatition but allocates seperate memory for each object created
const stu=function(name,age,marks){
    return student= {
        name:name,
        age:age,
        talk:function(){
            console.log(this.name + ' is talking');
        }
    }
}

//constructor function
const Student=function(name,age,marks){ 
    //constructor fn by convention start with capital letter and dont return anything
    this.name=name,
    this.age=age,
    this.marks=marks,
    this.getMarks=function(){
       return this.marks;
    }
}
//or in the form of class ie a template for creating objects has constructur fn and methods
// class Student {
//     constructor(name, age, marks) { //constructor is a keyword
//         this.name = name,
//             this.age = age,
//             this.marks = marks,
//             this.getMarks = function () {
//                 return this.marks;
//             };
//     }
// }

//new keyword creates an instance of a new object
const student1=new Student("Aayush",21,99);
const student2=new Student("shivam",20,100);
//both student1 and student2 are using the same fn ie getMarks

console.log(student1.name);
console.log(student1.getMarks());  