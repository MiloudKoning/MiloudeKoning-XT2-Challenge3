// Ophalen data uit externe API
fetch('https://api.covid19api.com/summary')

  .then(function(response) {
    // formatteer de variabele response naar json
    return response.json();
  })

  .then(function(result) {
    // hier heb ik de data uit api beschikbaar
    // console.log(result.Countries);
    var countries = result.Countries;

    // nu heb ik de landen uit de covid API in een variabele met de "countries" beschikbaar

    // we gaan door countries heen loopen
    countries.forEach(function(country) {
      if(country.Country == "Germany") {
        // run dit stukje code hieronder alleen als de countrynaam Germany is
        document.getElementById('land').innerHTML = country.Country;
        document.getElementById('confirmed').innerHTML = country.TotalConfirmed;
      }
    });
  });
 
//for (var i=0; i<countries.length; i++){
//alert(country.Country);





