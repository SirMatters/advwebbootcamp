function sumValues(a,b,c,d){
  return a+b+c+d;
}

var s = sumValues.bind(this, 1, 2)
//this will return the functuib, it WILL not be executed
//this is called partial application
sumValues(3,4);
//will be executed now

function sumValues2(a,b,c,d){
  return this.name + " " + (a+b+c+d);
}

var matt = {
  name: "Matt"
}

var s2 = sumValues2(matt, 1,2);
s2(3,4);