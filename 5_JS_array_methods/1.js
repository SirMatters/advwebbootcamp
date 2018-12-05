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

doubleValues([1,2,3]);
onlyEvenValues([1,2,3]);