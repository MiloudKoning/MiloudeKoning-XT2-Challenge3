function getAPIdata() {

	var url = '';
	var apiKey = '';
	var city = '';

	//opbouwen request
	var request = url + '?' + 'appid' + apiKey + '&' + 'q=' + city;

	//huidige weer ontvangen
	fetch(request)

	//ontleden naar JSON formaat
	.then(function(response) {
		//controle of dat wat je terugkrijgt ok is
		if(!response.ok) thow Error(response.statusText);
		//als er een error is stopt de code hier
		return response.json();
	})

	//toon weer per dag
	.then(function(response) {
		//toon weatherCondition
		//functie 1:
		onAPISucces(response);
	})

	//vang error
	//functie 2: als dat ophalen niet lukt dan ziet de bezoeker dit
	.catch(function(error) {
		onAPIError(error);
	});
}

//krijgt weer die response mee
//wanneer je succes hebt met de API dan pas kan er wat mee worden gedaan
//het 'mooi' maken van de data voor op de website
function onAPISucces(response) {
	//krijg weertype in string formaat
	var description = response.weather[0].description;

	//krijg temperatuur in Celcius
	var degC = Math.floor(response.main.temp - 273.15);

	//toon weer in DOM
	var weatherBox = document.getElementById('weather');
	weatherBox.innerHTML = degC + '&#176;C' + type;
}

function onAPIError(error) {
	console.error('Request failed', error);
	var weatherBox = document.getElementById('weather');
	weatherBox.className = 'hidden';
	weatherBox.innerHTML = 'Something went wrong in the request. Could not fetch weather.'
}

//'init' gegevensstroom
getAPIdata();






