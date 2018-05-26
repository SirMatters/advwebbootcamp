//each time it will stop at yield keywork
//.next() makes it go till the next yield
//once the last yield is dome it returns { value: _whatever_, done: true }
function* pauseAtOutput(num){
	for (let i=0; i<num; i++){
		yield i;
	}
}

let gen = pauseAtOutput(5);
gen.next();
gen.next();
gen.next();
gen.next();

//we could also use for of loop
for (val of pauseAtOutput(3)){
	console.log(val)
}