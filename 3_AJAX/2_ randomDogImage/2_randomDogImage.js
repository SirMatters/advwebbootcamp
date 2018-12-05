var api = "https://dog.ceo/api/breeds/image/random"

var btn = document.querySelector("#btn");
var img = document.querySelector("img");

btn.addEventListener("click", function(){
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = () => {
    if(XHR.readyState == 4){
      if (XHR.status == 200) {
        var url = JSON.parse(XHR.responseText).message;
        img.src = url;
        console.log(url);
      } else {
        console.log("Problem!");
      }
    } 
  };

  XHR.open("GET", api);
  XHR.send();
});