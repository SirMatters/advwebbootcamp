/* 
Write a function called smallestValue which accepts a variable number of parameters and returns the smallest parameters passed to the function.
*/

function smallestValue(...args){
  return Math.min(...args);
}
/* 
Write a function called placeInMiddle which accepts two parameters, an array and another array. This function should return the first array with all of the values in the second array placed in the middle of the first array.
*/

function placeInMiddle(arr, vals){
  let mid = Math.floor(arr.length/2);
  arr.splice(mid, 0, ...vals);
  return arr;
  // return [...arr.slice(0,mid),...vals, ...arr.slice(mid, arr.length)];
}
/* 
Write a function called joinArrays which accepts a variable number of parameters (you can assume that each argument to this function will be an array) and returns an array of all of the parameters concatenated together
*/

function joinArrays(...args){
  return args.reduce((acc, next) => acc.concat(next), [])
}
/* 
// Write a function called sumEvenArgs which takes all of the parameters passed to a function and returns the sum of the even ones.
*/
function flip(fn, thisArg, ...outerArgs){
  return (...args) => {
    let allArgs = outerArgs.concat(args).slice(0,fn.length).reverse();
    return fn.apply(thisArg, allArgs);
  };
}

/* 
Write a function called bind which accepts a function and a value for the keyword this. Bind should return a new function that when invoked, will invoke the function passed to bind with the correct value of the keyword this. HINT - if you pass more than two parameters to bind, those parameters should be included as parameters to the inner function when it is invoked. You will have to make use of closure!
*/
function firstNameFavoriteColor(favoriteColor){
    return this.firstName + "'s favorite color is " + favoriteColor
}

var person = {
    firstName: 'Elie'
}
    
function bind(fn, thisArg, ...outerArgs){
  return function(...innerArgs){
    return fn.apply(thisArg, [...outerArgs, ...innerArgs]);
  }
}

function addFourNumbers(a,b,c,d){
  return a+b+c+d;
}


var bindFn = bind(firstNameFavoriteColor, person);
bindFn('green')

bind(addFourNumbers,this)(1,2,3,4,5,6,7,8,9,10)