function hasOddNumber(arr){
  return arr.some(ele => ele%2 !== 0);
}
// hasOddNumber([2,2,2,2,2,2,4]) // true

function hasAZero(num){
  return num.toString().split("").some(ele => ele === "0");
}
// hasAZero(12121021)

function hasOnlyOddNumbers(arr){
    return arr.every(ele => ele%2 !== 0);
}
// hasOnlyOddNumbers([1,3,3,7]);


function hasNoDuplicates(arr){
    return !arr.some((ele,i,array) => {
      return arr.slice(i+1).includes(ele);
      // return arr.indexOf(ele) === arr.lastIndexOf(ele);
    });
}
hasNoDuplicates([1,2,3,4]);

var arr = [
        {title: "Instructor", first: 'Elie', last:"Schoppik"}, 
        {title: "Instructor", first: 'Tim', last:"Garcia", isCatOwner: true}, 
        {title: "Instructor", first: 'Matt', last:"Lane"}, 
        {title: "Instructor", first: 'Colt', last:"Steele", isCatOwner: true}
    ]
function hasCertainKey(arr, key){
  return arr.every(ele => ele.hasOwnProperty(key));
}

function hasCertainValue(arr, key, searchValue){
  return arr.every(ele => ele[key] === searchValue);
}
    // hasCertainValue(arr,'title','Instructor') // true
    // hasCertainValue(arr,'first','Elie') // false