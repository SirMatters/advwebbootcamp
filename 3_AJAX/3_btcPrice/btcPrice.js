var usd = document.querySelector("#usd");
var eur = document.querySelector("#eur");
var btn = document.querySelector("button");
var api = "https://api.coindesk.com/v1/bpi/currentprice.json";

function updateData() {
  var XHR = new XMLHttpRequest();
  XHR.onreadystatechange = () => {
    if (XHR.readyState == 4 && XHR.status == 200) {
      var parsed = JSON.parse(XHR.responseText).bpi
      var usdPrice = parsed.USD.rate_float;
      var eurPrice = parsed.EUR.rate_float;
      usd.innerHTML = usdPrice;
      eur.innerHTML = eurPrice;
    }
  }
  XHR.open("GET", api);
  XHR.send();
}

var fetchUpdate = () =>{
  fetch(api)
    .then((res)=>{return res.json();})
    .then((dat)=>{
      var usdPrice = dat.bpi.USD.rate_float;
      var eurPrice = dat.bpi.EUR.rate_float;
      usd.innerHTML = usdPrice;
      eur.innerHTML = eurPrice;
    });
}

window.onload = () =>{
  // updateData();
  fetchUpdate();
}

btn.addEventListener("click", () => {
//   updateData();
  fetchUpdate();
});

