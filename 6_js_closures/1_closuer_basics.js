// Closure exists when returned inner function USES variables of outter funtcion which have already been returned
// a closure does not exist if inner function does not use ouuter function variables
function counter(){
  let count=0;
  let instances=0;
  return function(){
    return ++count;
  }
}
// inner function remembers only the variables which it is using
// Being implemented this way 'count' variable becomes a private one and can not be accesssed externally
let first = coutner();
let second = counter();
first(); //1
first(); //2
second(); //1
first(); //3
// the count variable is not shared!

function multiplyBy(a){
  return function(b){
    return a*b;
  }
}

let byFive = multiplyBy(5); //function
byFive(5); //25

function studyClass(){
  let stud = ['a', 'b', 'c'];
  return {
    displayStudents: function(){
      return stud.slice(); //copy so it can not be changed externally
    },
    addStudent: function(student){
      stud.push(student);
      return stud.slice(); 
    }
  }
}