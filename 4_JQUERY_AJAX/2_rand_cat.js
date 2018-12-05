$("#btn").on("click", ()=>{
  $.ajax({
    method: "GET",
    url: "https://dog.ceo/api/breeds/image/random"
  })
    .done((res)=>{
      $("img").attr("src", res.message);
    })
    .fail((err)=>{
      console.log(err);
    })
})