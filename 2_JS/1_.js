function callback() {
  console.log('Form callback funciton');
}

function higherOrger(fn) {
  console.log('From HO function');
  fn();
  console.log("From HO");
}

// higherOrger(callback);

// forEach implementation
var arr = [1,2,3,4,5,6];
 
function forEach(arr, callback){
  for(var i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
} 
// forEach(arr, function(number){
//   console.log(number*2);
// })

// findIndex
function findIndex(array, callback) {
  for (var i=0; i<array.length; i++){
    if(callback(array[i], i, array)) {
      console.log(i);
      return i;
    }
  }
  return -1;
}

findIndex(arr, function(val, idx, arr){
  return val > 3 // this would return the index where the first value is greater than 3    
});