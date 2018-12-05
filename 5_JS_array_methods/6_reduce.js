/*
Write a function called extractValue which accepts an array of objects and a key and returns a new array with the value of each object at the key.

*/

function extractValue(arr, key){
  return arr.reduce((a,n)=>{
    a.push(n['name']);
    return a;
  },[]);
}
var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}]
extractValue(arr,'name') // ['Elie', 'Tim', 'Matt', 'Colt']


/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
*/

function vowelCount(str){
  var vowels = "aoeiu";
  return str.toLowerCase()
    .split("")
    .reduce((a,n)=>{
      if (vowels.indexOf(n) != -1){
        n in a ? a[n]++ : a[n]=1;
      }
      return a;
    },{})
}

// vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};

/*
Write a function called addKeyAndValue which accepts an array of objects and returns the array of objects passed to it with each object now including the key and value passed to the function.

*/

function addKeyAndValue(arr, key, value){
    return arr.reduce((a,n,i)=>{
      a[i][key] = value;
      return a;
    }, arr);
}
var arr = [{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}];

// addKeyAndValue(arr, 'title', 'Instructor')

/*
Write a function called partition which accepts an array and a callback and returns an array with two arrays inside of it. The partition function should run the callback function on each value in the array and if the result of the callback function at that specific value is true, the value should be placed in the first subarray. If the result of the callback function at that specific value is false, the value should be placed in the second subarray. 
*/

var names = ['Elie', 'Colt', 'Tim', 'Matt'];
let isLongerThanThreeCharacters = (str) => {
  return str.length > 3
}

function partition(arr, callback){
    return arr.reduce((a, n)=> {
      callback(n) ? a[0].push(n) : a[1].push(n);
      return a;
    }, [[],[]])
}

partition(names, isLongerThanThreeCharacters) // [['Elie', 'Colt', 'Matt'], ['Tim']]