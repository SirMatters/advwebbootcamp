var api = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";
var xhrBtn = document.querySelector("#xhr");
var fetchBtn = document.querySelector("#fetch");
var axBtn = document.querySelector("#ax");
var jqBtn = $("#jq");
var quote = document.querySelector(".quote");

var useXHR = (api) => {
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = ()=> {
    if(xhr.readyState == 4 && xhr.status == 200) {
      quote.innerHTML = JSON.parse(xhr.responseText)[0];
    }
  }
  xhr.open("GET", api);
  xhr.send();
}

var useFetch = (api)=>{
  fetch(api)
    .then((res)=>{return res.json();})
    .then((data) => {
      quote.textContent = data[0];
    })
    .catch((err)=>{
      console.log(err);
    })
}

var useJQuery = (api) => {
  $.ajax({
    method: "GET",
    url: api,
    dataType: "json"
  })
    .done((data)=>{$(".quote").text(data[0]);})
    .fail((err)=>{console.log(err);})
}

var useAxios = (api) => {
  axios.get(api)
    .then((data)=>{quote.textContent = data.data;})
    .catch((err)=> {console.log(err)})
}

xhrBtn.addEventListener("click", ()=>{
  useXHR(api);
});

fetchBtn.addEventListener("click", ()=>{
  useFetch(api);
})

axBtn.addEventListener("click", ()=>{
  useAxios(api);
})

jqBtn.on("click", ()=>{
  useJQuery(api);
})

