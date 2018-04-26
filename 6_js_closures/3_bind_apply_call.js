/*
Write a function called arrayFrom which converts an array-like-object into an array.
*/

function arrayFrom(arrayLikeObject){
  return [].slice.call(arrayLikeObject)
}
var divs = document.getElementsByTagName('divs');
console.log(divs.reduce) // undefined
var converted = arrayFrom(divs);
console.log(converted.reduce) // function(){}....

console.log("===========")
console.log("===========")
/* 
// Write a function called sumEvenArguments which takes all of the arguments passed to a function and returns the sum of the even ones.
*/

function sumEvenArguments(){
return [].slice.apply(arguments).reduce(function(a, next){
  if(next%2 === 0){
    return a+=next;
  } else {
    return a;
  }
}, 0);
}

console.log(sumEvenArguments(1,2,3,4)) // 6
console.log(sumEvenArguments(1,2,6)) // 8
console.log(sumEvenArguments(1,2)) // 2
  
console.log("===========")
console.log("===========")

/* 
Write a function called invokeMax which accepts a function and a maximum amount. invokeMax should return a function that when called increments a counter. If the counter is greater than the maximum amount, the inner function should return "Maxed Out"
*/

function invokeMax(fn, num){
  var counter = 0;
  return function(){
    if (counter<num) {
      counter++;
      return fn.apply(this, arguments);
    }
    return "Maxed Out!"
  }
}

function add(a,b){
    return a+b;
}

var addOnlyThreeTimes = invokeMax(add, 3);
console.log(addOnlyThreeTimes(1,2))
console.log(addOnlyThreeTimes(1,2))
console.log(addOnlyThreeTimes(1,2))
console.log(addOnlyThreeTimes(1,2))
console.log(addOnlyThreeTimes(1,2))

/* 
Write a function called once which accepts two parameters, a function and a value for the keyword 'this'. Once should return a new function that can only be invoked once, with the value of the keyword this in the function set to be the second parameter.

*/

function once(fn, thisArg){
  var count = 0;
  return function(){
    if (count !== 0) {
      return undefined;
    }
    count++;
    return fn.apply(thisArg, arguments);
  }
}

function add(a,b){
    return a+b
}

var addOnce = once(add, this);
console.log(addOnce(2,2)) // 4
console.log(addOnce(2,2)) // undefined
console.log(addOnce(2,2)) // undefined

function doMath(a,b,c){
    return this.firstName + " adds " + (a+b+c)
}

var instructor = {firstName: "Elie"}
var doMathOnce = once(doMath, instructor);
console.log(doMathOnce(1,2,3)) // undefined
console.log(doMathOnce(1,2,3)) // "Elie adds 6"

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!
*/

function bind(fn, thisArg){
  var outerArgs = [].slice.call(arguments,2);
  return function(){
    var innerArgs = [].slice.call(arguments);
    var allArgs = outerArgs.concat(innerArgs);
    return fn.apply(thisArg, allArgs)
  }
}

function firstNameFavoriteColor(favoriteColor){
    return this.firstName + "'s favorite color is " + favoriteColor
}

var person = {
    firstName: 'Elie'
}

function addFourNumbers(a,b,c,d){
    return a+b+c+d;
}

var bindFn = bind(firstNameFavoriteColor, person);
console.log(bindFn('green')) // "Elie's favorite color is green"

var bindFn2 = bind(firstNameFavoriteColor, person, 'blue');
console.log(bindFn2('green')) // "Elie's favorite color is blue" 
console.log(bind(addFourNumbers,this,1)(2,3,4)) // 10
console.log(bind(addFourNumbers,this,1,2)(3,4)) // 10
console.log(bind(addFourNumbers,this,1,2,3)(4)) // 10
console.log(bind(addFourNumbers,this,1,2,3,4)()) // 10
console.log(bind(addFourNumbers,this)(1,2,3,4)) // 10
console.log(bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)) // 10

/* 
Write a function called flip which accepts a function and a value for the keyword this. Flip should return a new function that when invoked, will invoke the function passed to flip with the correct value of the keyword this and all of the arguments passed to the function REVERSED. HINT - if you pass more than two parameters to flip, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure! 

Flip should return a new function that when invoked takes the correct number of required arguments to that function which are then reversed. HINT - you will need to use the .length property on functions to figure out the correct amount of arguments. For example:

flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) 
*/


function flip(fn, thisArg){
  var outerArgs = [].slice.call(arguments, 2);
  return function(){
    var innerArgs = [].slice.call(arguments);
    var allArgs = outerArgs.concat(innerArgs);
    return fn.apply(thisArg, allArgs.slice(0,fn.length).reverse())
  }
}

function personSubtract(a,b,c){
    return this.firstName + " subtracts " + (a-b-c);
}
var person = {
    firstName: 'Elie'
}
var flipFn = flip(personSubtract, person);
console.log(flipFn(3,2,1)) // "Elie subtracts -4"
var flipFn2 = flip(personSubtract, person, 5,6);
console.log(flipFn2(7,8)) // "Elie subtracts -4"
function subtractFourNumbers(a,b,c,d){
    return a-b-c-d;
}
flip(subtractFourNumbers,this,1)(2,3,4) // -2
flip(subtractFourNumbers,this,1,2)(3,4) // -2
flip(subtractFourNumbers,this,1,2,3)(4) // -2
flip(subtractFourNumbers,this,1,2,3,4)() // -2
flip(subtractFourNumbers,this)(1,2,3,4) // -2
flip(subtractFourNumbers,this,1,2,3)(4,5,6,7) // -2
flip(subtractFourNumbers,this)(1,2,3,4,5,6,7,8,9,10) // -2
flip(subtractFourNumbers,this,11,12,13,14,15)(1,2,3,4,5,6,7,8,9,10) // -22