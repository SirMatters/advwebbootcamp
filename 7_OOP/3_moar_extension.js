function Person(firstName, lastName, favoriteColor, favoriteNumber){
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.multiplyFavoriteNumber = function(num){
      return favoriteNumber * num;
  }
}

function Parent(firstName, lastName, favoriteColor, favoriteFood){
  Person.call(this, firstName, lastName, favoriteColor);
  this.favoriteFood = favoriteFood;
}

function Child(firstName, lastName, favoriteColor, favoriteFood){
  Parent.apply(this, arguments);
  this.favoriteFood = favoriteFood;
}

var child = new Child('Leo', 'Matts', 'Green', 'Eggs');
console.log(child.favoriteFood)
console.log(child.favoriteNumber)