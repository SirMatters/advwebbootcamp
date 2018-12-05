/* 
Write a function called copyObject, which accepts one parameter, an object. The function should return a shallow copy of the object.
*/

function copyObject(o){
	return Object.assign({}, o)
}

var o = {name: 'Elie'}
var o2 = copyObject({}, o)
o2.name = "Tim"
o2.name // 'Tim'
o.name // 'Elie'

/* 

Write a function called checkIfFinite which accepts one parameter and returns true if that parameter is a finite number.

*/

function checkIfFinite(num){
	return Number.isFinite(num);
}

checkIfFinite(4); // true
checkIfFinite(-3); // true
checkIfFinite(NaN); // false
checkIfFinite(Infinity); // false

/*

Write a function called areAllNumbersFinite which accepts an array and returns true if every single value in the array is a finite number, otherwise return false.
*/

function areAllNumbersFinite(arr){
	return arr.every(Number.isFinite);
}
var finiteNums = [4,-3,2.2]
var finiteNumsExceptOne = [4,-3,2.2,NaN]
console.log(areAllNumbersFinite(finiteNums)) // true
console.log(areAllNumbersFinite(finiteNumsExceptOne)) // false
/* 

Write a function called convertArrayLikeObject which accepts a single parameter, an array like object. The function should return the array like object converted to an array.
*/

function convertArrayLikeObject(obj){
	return Array.from(obj)
}
var divs = document.getElementsByTagName('div')
divs.reduce // undefined

var converted = convertArrayLikeObject(divs)
converted.reduce // funciton(){}...
/*

Write a function called displayEvenArguments which accepts a variable number of arguments and returns a new array with all of the arguments that are even numbers.
*/

function displayEvenArguments(){
  let retArr = [];
	Array.from(arguments, function(arg){
		if(Number.isFinite(arg)){
			if(arg%2 ==0){
				retArr.push(arg);
			}
		}
	})
	return retArr;
}

displayEvenArguments(1,2,3,4,5,6) // [2,4,6]
displayEvenArguments(7,8,9) // [8]
displayEvenArguments(1,3,7) // []


