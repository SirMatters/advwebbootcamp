//Object.assign() copies an object with all the 
//keys and values, but with other referenct

let o = {name: 'Tim'};
console.log(o.name);
let o1 = Object.assign({}, o)
console.log(o1.name);
o1.name = 'Ellie';
console.log(o.name, o1.name)

//but it does not create a deep clone
//which means that objects inside will remain
//their references
let o3 = {instructors: ['Ellie', 'Tim']};
let o4 = Object.assign({}, o3);
o4.instructors.push('New');
console.log(o3.instructors)

//Array.from(array-like-object, mapping-function) 
//returns an array form array-like-object
function test(){
	Array.from(arguments, arg=>arg*2).forEach(arg => console.log(arg));
}

test(1,2,3,4)

//.find()
let instructors = [{name: 'tim'}, {name: 'ellie'}];
instructors.find(function(val){
	return val.name = 'ellie';
})

instructors.findIndex(function(val){
	return val.name = 'tim'
})

//.includes()
console.log('awesome'.includes('some')); //true or false
console.log('awesome'.indexOf('some')); // -1 or starting position

//Number.isFinite() returns true or false if the passed arg is NaN or not
//Number.isInteger() ...