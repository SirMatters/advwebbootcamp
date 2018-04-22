var api = "https://randomuser.me/api/";
var btn = document.querySelector("#btn");
var img = document.querySelector("img");
var fullname = document.querySelector("#fullname");
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var city = document.querySelector("#city");

function handleErrors (request){
  if(!request.ok) {
    throw Error(request.status);
  }
  return request;
}

function parseJSON(res){
  return res.json().then((parsed)=>{
    return parsed.results[0];
  });
}

function updateProfile(data) {
  img.src = data.picture.medium;
  fullname.textContent = data.name.first + " " + data.name.last;
  username.textContent = data.login.username;
  email.textContent = data.email;
  city.textContent = data.location.city;
}

function printErrors(error){
  console.log(error);
}


btn.addEventListener("click", ()=>{
  fetch(api)
    .then(handleErrors)
    .then(parseJSON)
    .then(updateProfile)
    .catch(printErrors)
});