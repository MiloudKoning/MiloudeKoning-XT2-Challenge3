// COVID-19
// helaas niet gelukt, vastgelopen toen ik met die lat lon dingen moest gaan ophalen voor op de map

/*
// Ophalen data uit externe API
fetch('https://api.covid19api.com/summary')

  .then(function(response) {
    // formatteer de variabele response naar json
    return response.json();
  })

  .then(function(result) {
    // hier data uit API beschikbaar
    console.log(result.Countries);
    var countries = result.Countries;

    // landen uit covid API in variabele "countries" beschikbaar

    // hier door "countries" heen loopen
    countries.forEach(function(country) {
      if(country.CountryCode == "NL") {
        // als CountryCode "NL" is, dan code hieronder uitvoeren
        document.getElementById('land').innerHTML = country.Country;
        document.getElementById('confirmed').innerHTML = country.TotalConfirmed;
      }
    });
  });
  */


// MAPBOX
// API token
mapboxgl.accessToken = 'pk.eyJ1IjoibWlsb3VkZWtvbmluZyIsImEiOiJjazhrM2lybmswMW9kM2ZudTNyamI1Y2V4In0.ezPR_2wToK7s2onIDhMmDA';

// kaart initiëren
var map = new mapboxgl.Map({
	container: 'map',
	// eigen stijl voor kaart
	style: 'mapbox://styles/mapbox/streets-v11',
	// 
	center: [-7.844656, 28.258614],
	//zoom 7 zodat je heel nederland ziet
	zoom: 1,
});


//hij moet weten wat voor steden je wilt laten zien
//in array met 6 objectjes met dezelfde keys
//coordinates is array met 2 cijfers erin (let op volgorde!)
var countries = [
  {
    name: 'Nederland',
    coordinates: [5.291266, 52.132633]
  },

  {
    name: 'Duitsland',
    coordinates: [10.451526, 51.165691]
  },

  {
    name: 'Zwitserland',
    coordinates: [8.227512, 46.818188]
  },

  {
    name: 'Italie',
    coordinates: [12.56738, 41.87194]
  },

  {
    name: 'Mexico',
    coordinates: [-102.552784, 23.634501]
  },

  {
    name: 'GrootBrittannie',
    coordinates: [ -3.435973, 55.378051]
  },
];

// url aangesproken wordt op openWeather
var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';

// API key
var openWeatherMapUrlApiKey = '6a719e3c4dfb752cbb9fe577d9c14591';


// alles binnen {} wordt uitgevoerd zodra kaart geladen is
map.on('load', function() {
  // hiermee door de array heen loopen
  countries.forEach(function(country) {

    // uiteindelijke url
    // [0] of [1] voor eerste of tweede waarde in array
    var request = openWeatherMapUrl + '?' + 'appid=' + openWeatherMapUrlApiKey + '&lon=' + country.coordinates[0] + '&lat=' + country.coordinates[1];

    // hieronder huidige weer ophalen aan de hand van coördinaten van de landen
    // then then catch structuur
    fetch(request)
      .then(function(response) {
        if(!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(function(response) {
        plotImageOnMap(response.weather[0].icon, country)
      })
      .catch(function(error) {
        console.log('ERROR', error);
      });
  });
});

function plotImageOnMap(icon, country) {
  map.loadImage(
    // openWeather map zelf plaatje opbouwen ofzo url idk
    'http://openweathermap.org/img/w/' + icon + '.png',

    function (error, image) {
      if (error) throw error;
      // naam die je hieronder geeft tussen "" moet uniek zijn omdat je loopt
      // daarom _city.name (bijv. weatherIcon_Nederland)
      map.addImage("weatherIcon_" + country.name, image);
      // source toevoegen
      map.addSource("point_" + country.name, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: country.coordinates
            }
          }]
        }
      });
      map.addLayer({
        id: "points_" + country.name,
        type: "symbol",
        // verwijst naar map.addSource
        source: "point_" + country.name,
        layout: {
          //nog een variabele naam voor de source
          "icon-image": "weatherIcon_" + country.name,
          "icon-size": 1.3
        }
      });
    }
  );
}

