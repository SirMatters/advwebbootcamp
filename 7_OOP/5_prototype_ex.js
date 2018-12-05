function Person(firstName, lastName, favoriteColor, favoriteNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber= favoriteNumber;
  this.family = [];
}

Person.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

Person.prototype.addToFamily = function(familyMember) {
  if(familyMember instanceof Person){
    if (this.family.every(function(ele){
      return (ele.fullName() != familyMember.fullName());
    })){
      this.family.push(familyMember);
    }
  }
  console.log(this.family.length)
  return this.family.length
}

var person = new Person("Elie", "Schoppik", "purple", 34);
var anotherPerson = new Person()
var newMember = new Person("VOVAN")

person.addToFamily(anotherPerson); // 1
person.addToFamily(anotherPerson); // 1
person.addToFamily(newMember); // 2
person.family.length // 2

person.addToFamily("test"); // 2
person.addToFamily({}); // 2
person.addToFamily([]); // 2
person.addToFamily(false); // 2
person.family.length // 2

// =====================
function map(fn){
  var newArr = [];
  this.forEach(function(ele){
    newArr.push(fn(ele));
  })
  return newArr;
}

function twice(num){
  return num*2;
}

Array.prototype.map = mapp;
console.log([1,2,3].mapp(twice));

function reverse(str){
  newStr = [];
  str.split("").forEach(function(ele){
    newStr.unshift(ele);
  });
  return newStr.join("");
}

String.prototype.reverse = reverse;