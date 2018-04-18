function callback() {
  console.log('Form callback funciton');
}

function higherOrger(fn) {
  console.log('From HO function');
  fn();
  console.log("From HO");
}

higherOrger(callback);

// forEach implementation
var arr = [1,2,3,4,5,6];
     
//forEach function is created using 
//2 parameters
 
function forEach(arr, callback){
  for(var i = 0; i < arr.length; i++){
    callback(arr[i], i, arr);
  }
}
 
//Here I invoked forEach function with
//a callback to multiply every array's
//number by 2
 
forEach(arr, function(number){
  console.log(number*2);
})
