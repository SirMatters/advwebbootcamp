function Person(name){
  this.name = name;
}

Person.prototype.hello = function(){
    console.log("Hello, " + this.name);
}

function Student(name){
  Person.call(this, name);
}

Student.prototype = Object.create(Person.prototype); //we cope prototype, not just setting link on it
Student.prototype.constructor = Student; //constructor points back to student class

Student.prototype.visitLecture= function(){
  console.log("Visited!");
}

var st = new Student('Ellie');
var man = new Person('Hel');
st.hello();
st.visitLecture();
man.hello();
man.visitLecture(); //error as we copied prototype, so Student's prototype does not affect
