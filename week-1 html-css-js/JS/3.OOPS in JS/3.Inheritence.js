//inheritence is a mechanism used to create new classes from already existing classes

class Person {               //parent or base class
    constructor(name, age) {
        console.log('Person class constructor called!');
        this.name = name
        this.age = age
        this.talk = function () {
            console.log(`hi i am ${this.name}`);
        }
    }
}

class Student extends Person {        //Student is a child class
    constructor(name, age, marks) { //constructor is a keyword
        super(name,age);
        this.marks = marks
        this.getMarks = function () {
            return this.marks;
        }
    }
}

class Teacher extends Person {
    constructor(name, age, subject) { //constructor is a keyword
        super(name,age);
        this.subject = subject
    }
}

const s1=new Student('Aayush',21,100);
console.log(s1);