var farenheit = true;
var lat = 40.0150; // Default Boulder Lat
var long = -105.2705; // Default Boulder Long

if(window.chrome){
  $(".chrome-warning").html("<p>Unfortunately, Chrome no longer allows GeoLocations to be shared with non-secure websites (like timarsenault.com) so I can't pull your location, but here's the weather where I live, beautiful Boulder Colorado!</p>");
  $(".chrome-warning").css({'display': 'block'});
};

function setWeather(){
  // Get position if possible **Not possible on Chrome 50**
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
   if(position){
     lat = position.coords.latitude;
     long = position.coords.longitude;
   }
  });    
  // Make AJAX call to openweathermap.org and assign data
  $.getJSON('http://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=0596fe0573fa9daa94c2912e5e383ed3' +'', function(json){
     weather = json;
     $("#loc").html(weather.name + ", " + weather.sys.country);
     $("#weather-description").html(weather.weather[0].description);
     $("#icon").attr("src", "http://openweathermap.org/img/w/" + weather.weather[0].icon + ".png");
     if(farenheit == true){
         $("#curTemp").html(Math.round(weather.main.temp * 9/5 - 459.67) + "<a id='convert'>&degF</a>");
         $("#hiTemp").html("high: "+ Math.round(weather.main.temp_max * 9/5 - 459.67) + "&degF");
         $("#loTemp").html("low: "+ Math.round(weather.main.temp_min * 9/5 - 459.67) + "&degF");
     }
     if(farenheit == false){
         $("#curTemp").html(Math.round(weather.main.temp  -273.15) + "<a id='convert'>&degC</a>");
         $("#hiTemp").html("high: "+ Math.round(weather.main.temp_max  -273.15) + "&degC");
         $("#loTemp").html("low: "+ Math.round(weather.main.temp_min -273.15) + "&degC");
     }
     $("#convert").on("click", function(){
    farenheit = !farenheit;
    console.log(farenheit);
    setWeather();
})
     }
  )

};

$(function(){
  setWeather();
});
