let $ = require('jquery');

function getMostFollowers(...users){
	let baseUrl = 'https://api.github.com/users/';
	let urls = users.map(u => $.getJSON(baseUrl + u));
	return Promise.all(urls).then(function(data){
		let max = data.sort((a,b) => (a.followers < b.followers))[0];
		return `${max.name} has the most followers with ${max.followers}`;
	})
}

getMostFollowers('elie','tigarcia','colt').then(function(data){
  console.log(data)
});

function getStarwarsCharacter(num){
	let retStr =''
	return $.getJSON(`https://swapi.co/api/people/${num}`).then(data => {
		retStr += `${data.name} is featured in `;
		return $.getJSON(data.films[0])
	}).then(filmData => {
			retStr += `${filmData.title} directed by ${filmData.director}`
			return $.getJSON(filmData.planets[0])
	}).then(planetData => {
				retStr += `. Which happens on ${planetData.name}.`
				return retStr;
	})
}

getStarwarsCharacter(1).then(function(data){
    console.log(data)
})