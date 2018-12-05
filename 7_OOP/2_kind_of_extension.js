function Vehicle(make, year, model){
  this.make = make;
  this.year = year;
  this.model = model;
}

function Car(make, model, year){
  Vehicle.call(this, make, model, year);
  this.numWheels = 4;
}

function Moto(make, model, year){
  Vehicle.call(this, make, model, year);
  this.numWheels = 2;
}

function Monobike(make, model, year){
  Vehicle.apply(this, arguments);
  this.numWheels = 1;
}

var BMW = new Car('Germany', 1989, 'z1');
var Honda = new Moto('Japan', 1999, 'k2');
var Some = new Monobike('USA', 2017, 'MegaWheel-01');

console.log(BMW.make, BMW.numWheels);
console.log(Honda.make, Honda.numWheels);
console.log(Some.make, Some.numWheels);
