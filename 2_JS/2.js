function countDown(time){
  var count = setInterval(()=>{
    if(time > 0){
      time--;
      console.log("Timer:", time);
    } else {
      console.log("Ring Ring Ring!!!");
      clearInterval(count);
    }
  }, 1000);
}

countDown(5);