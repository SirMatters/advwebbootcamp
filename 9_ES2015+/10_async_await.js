async function hasMostFollowers(...args){
	let baseString = 'https://api.github.com/users/';
	let urls = args.map(user => $.getJSON(baseString + user));
	let results = await Promise.all(urls);
	let max = results.sort((a,b) => (b.followers - a.followers))[0]
	return `${max.name} has most followers with ${max.followers}`
}

hasMostFollowers('elie','tigarcia','colt').then(function(data){
    console.log(data)
});

async function getStarwarsCharacter(num){
	let retStr =''
  let jedi = await $.getJSON(`https://swapi.co/api/people/${num}`);
  let film = await $.getJSON(jedi.films[0]);
  let planet = await $.getJSON(film.planets[0]);
  return `${jedi.name} is featured in ${film.title} directed by ${film.director} happening on ${planet.name}`
}

getStarwarsCharacter(1).then(function(data){
    console.log(data)
})