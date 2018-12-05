var url = "https://opentdb.com/api.php?amount=1";
var btn = document.querySelector("button");
btn.addEventListener("click", ()=>{
  axios.get(url)
    .then((res)=>{
      console.log(res.data.results[0].question);
    })
    .catch((err)=>{
      console.log(err);
    })
});