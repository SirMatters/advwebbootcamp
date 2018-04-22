function doubleValues(arr) {
  var newArr = [];
  arr.forEach(element => {
    newArr.push(element*2);
  });
  return newArr;
}

function onlyEvenValues(arr){
  var newArr = [];
  arr.forEach(ele => {
    if(ele%2 == 0) {
      newArr.push(ele);
    }
  });
  return newArr;
}

function showFirstAndLast(arr){
  var newArr = [];
  arr.forEach(ele =>{
    newArr.push(ele.substring(0,1) + ele.substring(ele.length-1, ele.length))
  });
  return newArr;   
}

function addKeyAndValue(arr,key,value){
  var newArr = [];
  arr.forEach(ele => {
    ele[key] = value;
    newArr.push(ele);
  });
  return newArr;
}

function vowelCount(str){
  var vowels = ["a", "e", "i", "o", "u"];
  var arr = str.toLowerCase().split("");
  var countDict = {};
  arr.forEach(letter => {
    if (vowels.includes(letter)){
      if(countDict.hasOwnProperty(letter)){
        countDict[letter]++;
      } else{
        countDict[letter] = 1;
      }
    }
  });
  return countDict;
}

vowelCount('I Am awesome and so are you');