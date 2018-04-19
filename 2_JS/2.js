function countDown(time){
  var count = setInterval(()=>{
    time--;
    if(time > 0){
      console.log("Timer:", time);
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(count);
    }
  }, 1000);
}

countDown(5);