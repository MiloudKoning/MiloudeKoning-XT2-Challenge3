// MAPBOX met OpenWeather
// API token
mapboxgl.accessToken = 'pk.eyJ1IjoibWlsb3VkZWtvbmluZyIsImEiOiJjazhrM2lybmswMW9kM2ZudTNyamI1Y2V4In0.ezPR_2wToK7s2onIDhMmDA';

// kaart initiëren
var map = new mapboxgl.Map({
	container: 'map',
	// eigen stijl voor kaart
	style: 'mapbox://styles/miloudekoning/ck8yczi4g49x71ipb4qgsljkt',
	// 
	center: [-98.583333, 39.833333],
	//zoom 2.5 zodat je heel US ziet
	zoom: 2.5,
});

// url die aangesproken wordt op OpenWeather
var openWeatherMapUrl = 'https://api.openweathermap.org/data/2.5/weather';

// API key
var openWeatherMapUrlApiKey = '6a719e3c4dfb752cbb9fe577d9c14591';


// alles binnen {} wordt uitgevoerd zodra kaart geladen is
map.on('load', function() {
  // hiermee door de array heen loopen
  locations.forEach(function(location) {

    // uiteindelijke url
    // [0] of [1] voor eerste of tweede waarde in array
    var request = openWeatherMapUrl + '?' + 'appid=' + openWeatherMapUrlApiKey + '&lon=' + location.coordinates[0] + '&lat=' + location.coordinates[1];

    // hieronder huidige weer ophalen aan de hand van coördinaten van de locaties (locations.js)
    // then then catch structuur
    fetch(request)
      .then(function(response) {
        if(!response.ok) throw Error(response.statusText);
        return response.json();
      })
      .then(function(response) {
        plotImageOnMap(response.weather[0].icon, location)
      })
      .catch(function(error) {
        console.log('ERROR', error);
      });
  });
});

// functie afbeeldingen van OpenWeather op kaart
function plotImageOnMap(icon, location) {
  map.loadImage(
    // eigen plaatjes OpenWeather
    'https://openweathermap.org/img/w/' + icon + '.png',

    function (error, image) {
      if (error) throw error;
      // naam die je hieronder geeft tussen "" moet uniek zijn omdat je loopt
      // daarom _location.name (bijv. weatherIcon_Amsterdam)
      map.addImage("weatherIcon_" + location.name, image);
      // source toevoegen
      map.addSource("point_" + location.name, {
        type: "geojson",
        data: {
          type: "FeatureCollection",
          features: [{
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: location.coordinates
            }
          }]
        }
      });
      
      map.addLayer({
        id: "points_" + location.name,
        type: "symbol",
        // verwijst naar map.addSource
        source: "point_" + location.name,
        layout: {
          // nog een variabele naam voor de source
          "icon-image": "weatherIcon_" + location.name,
          "icon-size": 1.3
        }
      });
    }
  );
}

// functie pop-ups per SpaceX locatie
function tooltips() {
  map.on('load', function () {
  map.addSource('places', {
    'type': 'geojson',
    'data': {
      'type': 'FeatureCollection',
      'features': tooltipLocations
    }
  });

  map.addLayer({
    'id': 'places',
    'type': 'symbol',
    'source': 'places',
    'layout': {
      'icon-image': '{icon}-15',
      'icon-allow-overlap': true
    }
  });

  // pop-up
  var popup = new mapboxgl.Popup({
    //niet nodig want is hover
    closeButton: false,
    closeOnClick: false
  });

  // als je op de kaart met je muis over een van de places gaat, DAN moet je iets gaan doen ('e' meegeven)
  // e is de locatie waar je over heen hovert
  map.on('mouseenter', 'places', function (e) {
    //slice is dathij het eerste deel pakt?
    var coordinates = e.features[0].geometry.coordinates.slice();
    var description = e.features[0].properties.description;

    popup
      //wat je uiteindelijk wilt voor de pop-up
      .setLngLat(coordinates)
      .setHTML(description)
      .addTo(map);
  });

  //als je met je muis weer weggaat gaat de pop-up ook weg
  map.on('mouseleave', 'places', function () {
    popup.remove();
  });
});
}

//zoekbalk
map.addControl(
  new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
  })
);

//zoom en rotatie
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'bottom-right');

// kaart centreren op de coordinaten van het symbool waarop je klikt
map.on('click', 'places', function(e) {
map.flyTo({ center: e.features[0].geometry.coordinates });
});

// cursor veranderen in pointer wanneer je over een symbool hovert
map.on('mouseenter', 'places', function() {
map.getCanvas().style.cursor = 'pointer';
});

// cursor terugveranderen in pointer wanneer je er weer vanaf komt
map.on('mouseleave', 'places', function() {
map.getCanvas().style.cursor = '';
});

tooltips();
