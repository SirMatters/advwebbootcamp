function filterByValue(arr, key){
  return arr.filter((ele)=>{
    return ele.hasOwnProperty(key) === true;
  });
}
filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner')


function find(arr, searchValue){
  var ret = arr.filter(ele => {
    return ele == searchValue;
  })[0];
  return ret;
}
find([1,2,3,4,5], 410)

function findInObj(arr, key, searchValue){
  return arr.filter(ele => {
    return ele[key] == searchValue;
  })[0];
}
findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true)

function removeVowels(str){
  var vowels = "aoeiu"
  var arr = str.toLowerCase().split("");
  return arr.filter(ele =>{
    return vowels.indexOf(ele) == -1;
  }).join("");
}
removeVowels('TIM')

function doubleOddNumbers(arr){
  return arr
  .filter(ele =>{return ele%2 !== 0;})
  .map(ele => {return ele*2;});
}
doubleOddNumbers([1,2,3,4,5])