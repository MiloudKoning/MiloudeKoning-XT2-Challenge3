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


// MAPBOX met openWeather
// API token
mapboxgl.accessToken = 'pk.eyJ1IjoibWlsb3VkZWtvbmluZyIsImEiOiJjazhrM2lybmswMW9kM2ZudTNyamI1Y2V4In0.ezPR_2wToK7s2onIDhMmDA';

// kaart initiëren
var map = new mapboxgl.Map({
	container: 'map',
	// eigen stijl voor kaart
	style: 'mapbox://styles/mapbox/streets-v11',
	// 
	center: [-96.4247, 31.51073],
	//zoom 7 zodat je heel nederland ziet
	zoom: 2,
});

var countries = [
  {
    // SpaceX Seattle
    name: 'Redmond',
    coordinates: [-122.035494, 47.693214]
  },

  {
    // SpaceX Landing Zone 4
    name: 'Lompoc',
    coordinates: [-120.614561, 34.633670]
  },

  {
    // SpaceX
    name: 'Hawthorne',
    coordinates: [-118.328263, 33.921285]
  },

  {
    // SpaceX Space Launch Facility
    name: 'Brownsville',
    coordinates: [-97.180926, 25.993464]
  },

  {
    // SpaceX Rocket Development Facility
    name: 'McGregor',
    coordinates: [-97.437303, 31.434422]
  },

  {
    // SpaceX Landing Zone 1 & 2
    name: 'Cape Canaveral',
    coordinates: [-80.601714, 28.610747]
  },

  {
    // SpaceX Washington DC
    name: 'Washington',
    coordinates: [-77.024999, 38.901388]
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

/*
function getAPIdata() {
  var city = 'the%20Hague,nl';

  // opbouwen request
  var request = openWeatherMapUrl + '?' + 'appid=' + openWeatherMapUrlApiKey + '&' + 'q=' + city;

  // get current weather
  fetch(request)  
  // parse response to JSON format
  .then(function(response) {
    if(!response.ok) throw Error(response.statusText);
    return response.json();
  })
  // do something with response
  .then(function(response) {
    // show full JSON object
    console.log(response);
    //document.getElementById('weather').innerHTML = response;
    document.getElementById('weather').innerHTML = response.weather[0].description;
  })
  // catch error
  .catch(function (error) {
    console.log('Request failed', error);
  });
}
*/

function tooltips() {
  map.on('load', function () {
  map.addSource('places', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': tooltipLocations
    }
  });

  // Add a layer showing the places.
  map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
      'icon-image': '{icon}-15',
      'icon-allow-overlap': true
    }
  });

  // Create a popup, but don't add it to the map yet.
  //popup
  var popup = new mapboxgl.Popup({
    //niet nodig want is hover
    closeButton: false,
    closeOnClick: false
  });

//als je op de kaart met je muis over een van de places gaat, DAN moet je iets gaan doen (geef 'e' mee)
// e is de locatie waar je over heen hovert
  map.on('mouseenter', 'places', function (e) {
    //slice is dathij het eerste deel pakt?
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    // Populate the popup and set its coordinates based on the feature found.
    popup
    //wat je uiteindelijk wilt voor de pop-up
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });

  //als je met je muis weer weggaat gaat de popup ook weg
  map.on('mouseleave', 'places', function () {
    popup.remove();
  });
});
}

/*

var popup = new mapboxgl.Popup()
   .setHTML('<h3>De Haagse Hogeschool</h3><p>Is momenteel dicht.</p>');

// // Adding a marker based on lon lat coordinates
new mapboxgl.Marker()
  //met puntjes kan je het er meteen achter die new zetten
   .setLngLat([4.324439, 52.067200])
   .setPopup(popup)
   //voeg hem toe op de app, anders weet hij niet waar hij hem moet plaatsen
   .addTo(map);
*/

//getAPIdata();
tooltips();
