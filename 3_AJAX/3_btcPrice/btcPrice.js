var usd = document.querySelector("#usd");
var eur = document.querySelector("#eur");
var btn = document.querySelector("button");
var api = "https://api.coindesk.com/v1/bpi/currentprice.json";

function updateData() {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var usdPrice = JSON.parse(XHR.responseText).bpi.USD.rate_float;
      var eurPrice = JSON.parse(XHR.responseText).bpi.EUR.rate_float;
      usd.innerHTML = usdPrice;
      eur.innerHTML = eurPrice;
    }
  }
  XHR.open("GET", api);
  XHR.send();
}

window.onload = () =>{
  updateData();
}

btn.addEventListener("click", () => {
  updateData();
});

