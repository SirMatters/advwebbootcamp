function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark= function(){
    console.log(this.name + " BARKS!!!");
  }
}

var one = new Dog('one', 3);
one.bark();