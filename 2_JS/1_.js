function callback() {
  console.log('Form callback funciton');
}

function higherOrger(fn) {
  console.log('From HO function');
  fn();
  console.log("From HO");
}

higherOrger(callback);