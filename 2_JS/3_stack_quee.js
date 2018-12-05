console.log("Start");

// The fact is that the setTimeout function
// is in WEBapi so it will not happen immediately
// it will be 'waiting' in the 'webapi space'
// till and then put to quee. As the stack is empty,
// the logging will happen.

(setTimeout(()=>{console.log("Timeout!")}, 1000));
// This is sync forEach so it will happen in the stack immediately
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].forEach((num)=>{
  console.log("Just log," ,num);
  setTimeout(()=>{console.log(num)}, 800);
});
console.log("End!");