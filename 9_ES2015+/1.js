/* 1 - Refactor the following code to use ES2015 arrow functions - make sure your function is also called tripleAndFilter
*/
let tripleAndFilter = arr => arr.map(value => value * 3).filter(value => value % 5 === 0)
console.log(tripleAndFilter([1,2,3,5]));

/* 2 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called doubleOddNumbers
*/
let doubleOddNumbers = arr => arr.filter(val => val % 2 !== 0).map(val => val *2)
console.log(doubleOddNumbers([1,2,3,5]));

/* 3 - Refactor the following code to use ES2015 arrow functions. Make sure your function is also called mapFilterAndReduce.
*/
let mapFilterAndReduce = arr => arr.map(val => val.firstName).filter(val => val.length < 5).reduce((acc,next) => {
    acc[next] = next.length
    return acc;
  }, {})

/* 4 - Write a function called createStudentObj which accepts two parameters, firstName and lastName and returns an object with the keys of firstName and lastName with the values as the parameters passed to the function.

Example:
    createStudentObj('Elie', 'Schoppik') // {firstName: 'Elie', lastName: 'Schoppik'}
*/

let createStudentObj = (firstName, lastName) => ({firstName: firstName, lastName: lastName})
console.log(createStudentObj('Elie', 'Schoppik'))

/* 5 - Given the following code: 
Refactor this code to use arrow functions to make sure that in 1000 milliseconds you console.log 'Hello Colt'
*/
let instructor = {
  firstName: "Colt",
  sayHi: function(){
    setTimeout(() => {console.log('Hello ' + this.firstName)},1000)
  }
}

instructor.sayHi();

