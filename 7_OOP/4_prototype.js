function Person(name) {
  this.name = name;
}
Person.prototype.sayHi = function(){
  console.log("Hi, "+ this.name);
}

var one = new Person("one");
var two = new Person("two");

console.log(one.__proto__ === Person.prototype); //true
console.log(Person.prototype.constructor === Person); //true
one.sayHi()
two.sayHi()


// =========================
function Vehicle(make, year, model){
  this.make = make;
  this.year = year;
  this.model = model;
  isRunning = false;
}

Vehicle.prototype.turnOn = function(){
  if(!isRunning) {
    this.isRunning = true;
  }
}
Vehicle.prototype.turnOff = function(){
  if(this.isRunning) {
    this.isRunning = false;
  }
}
Vehicle.prototype.beep = function(){
  if(this.isRunning) {
    console.log("Beep!");
  }
}

var car = new Vehicle("bmw", 1998, "z1");
car.turnOn();
car.beep()
console.log("now off!")
car.turnOff();
car.beep();
