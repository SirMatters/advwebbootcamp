var prom = new Promise((res, rej)=>{
  setTimeout(()=>{
    var int = 7;
    res(int);
  }, 3000);
});

//countdown will only start now, but the promise object was created earlier
prom.then((data)=>console.log("Promise is happeneing!", data));