function Dog(name, age) {
  this.name = name;
  this.age = age;
  this.bark= function(){
    console.log(this.name + " BARKS!!!");
  }
}

var one = new Dog('one', 3);
one.bark();

// basically this is how the object model looks like
// Dog --.prototype-->prototype object
// prototype object --.constructor-->Dog
// one --__proto__-->prototype object