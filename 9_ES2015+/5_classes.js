class Person {
  constructor(name, age){
    this.name = name;
    this.age = age;
  } 
}

let Max = new Person('Max', 27);

// 1 - Create a class for a Person. Each person should have a firstName, lastName, favoriteColor, favoriteNumber.
/* 2 - Add an instance method called multiplyFavoriteNumber that accepts one parameter and returns the product of the parameter multiplied with the favoriteNumber property on a person object.
    
Examples:    
    var person = new Person("Elie", "Schoppik", "purple", 34)
    person.multiplyFavoriteNumber(10) // 340

*/

class Person{
  constructor(firstName, lastName, favoriteColor, favoriteNumber){
      this.firstName = firstName;
      this.lastName = lastName;
      this.favoriteColor = favoriteColor;
      this.favoriteNumber = favoriteNumber;
  }
  multiplyFavoriteNumber(a) {
      return a*this.favoriteNumber
  }
  static sayHi(){
    console.log(`Hi! My name is ${this.firstName} ${this.lastName}`);
  }
}

class professional extends Person {
  //now all the methods of person ara available
  constructor(firstName, lastName){
    super(firstName, lastName);
  }
  //Super is used when the method of the SAME name is implemented!
}

class Vehicle{
	constructor(make, model, year){
		this.make = make;
		this.model = model;
		this.year = year;
	}
	start(){
		return "VROOM!";
	}
	toString(){
		return `The make, model and year are ${this.make} ${this.model} ${this.year}`
	}
}

class Car extends Vehicle{
	constructor(){
		super(...arguments);
		this.numWheels = 4
	}
}

class Motorcycle extends Vehicle{
	constructor(){
		super(...arguments);
		this.numWheels = 2;
	}
}