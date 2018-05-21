function displayRandom(){
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      if(Math.random() > .5){
        resolve('yes');
      } else {
        reject('no');
      }
    }, 100)
  })
}
displayRandom()
  .then(e => console.log(e))
  .catch(e => console.log(e));


  // Promise.all will take a bunch of promises and wait for them to resolve. They will not resolve sequentially. The operation fails if even one of promises is rejected
function getMovie(title){
    return $.getJSON(`https://omdbapi.com?t=${title}&apikey=thewdb`);
}

var titanicPromise = getMovie('titanic');
var shrekPromise = getMovie('shrek');
var braveheartPromise = getMovie('braveheart');

Promise.all([titanicPromise, shrekPromise, braveheartPromise])
  .then(function(movies){
    return movies.forEach(function(value){
        console.log(value.Year);
    });
});

function getUserInfo(user){
  return $.getJSON(`https://api.github.com/users/${user}`);
}

function getUsersData(user){
  let args = [].slice.apply(this);
  let map = new Map();
  args.forEach((u)=>{
    let userPromise = getUserInfo(u);
    map.set(u, userPromise);
  });
  return map;
}

let u = getUserInfo('sirmatters');

u.then(i => console.log(i.followers)).catch(e => console.log(e))

function getMostFolowers(){
  let map = getUsersData(arguments);
  let max = 0;
  let mostFollowed = '';
  for (let key of map.keys()){
    let folowers = map.get(key).then(key => key.followers).catch(e => console.log(e));
    if (followers > max){
      max = followers;
      mostFloowed = key;
    }
  }
  return `${mostFollowed} has the most followers with ${max}`;
}