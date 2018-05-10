//Object destructing
var instructor = {
  firstName: 'First',
  lastName: 'Last'
}
//to extract data
var {firstName, lastName} = instructor
console.log(firstName)
//in case of different naming
var{firstName:first, lastName:last} = instructor
console.log(last)

//default values ES5
function createInstructor(options){
  var options = options || {};
  var name = options.name || {first: 'Matt', last: 'Lane'};
  var isHilarious = options.isHilarious || false;
  return [name.first, name.last, isHilarious];
}
//using destructors
//we pass destructured object as a parameter
function createInstructor({name={first:'Matt', last:'Lane'}, isHilarious=false} = {}){
  return [name.first, name.last, isHilarious];
}
createInstructor();
createInstructor({isHilarious: true});
createInstructor({name:{first:'Tim', last:'Ferris'}});

//object fieds as parametres 
function displayInfo({name, favColor}){
  return [name, favColor];
}

var instructor = {
  name: 'Mike',
  favColor: 'purple'
}

displayInfo(instructor);

//Array distructuring 
var arr = [1,2,3];
var [a,b,c] = arr;

function returnNumbers(a,b){
  return [a,b]
}

[first, second] = returnNumbers(5, 10);

//swapping values
function swap(a,b){
  return [a,b] = [b,a]
}