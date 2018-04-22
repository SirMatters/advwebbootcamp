
$('#btn').on('click',()=>{
  $.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: 'json'
  })
    .done((res)=>{$("p").text(res);})
    .fail(()=>{alert("Some shit happened");})
})