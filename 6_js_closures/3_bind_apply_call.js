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