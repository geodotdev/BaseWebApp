function showPicture(){
  // use jQuery ($ is shorthand) to find the div on the page and then change the html
  // 'rounded-circle' is a bootstrap thing! Check out more here: http://getbootstrap.com/css/
  $("#image").append('<img class="rounded-circle" src="images/high-five.gif"/>');
  $("p").html("High five! You're building your first web app!");

  // jQuery can do a lot of crazy stuff, so make sure to Google around to find out more
  
}

$(document).ready( function() {
  getWeather();
})
function getWeather() {
  var url = "https://api.openweathermap.org/data/2.5/weather?q=Beirut,Lebanon&units=metric&appid=" + apiKey;
  $.ajax(url, { success: function(data){
    //console.log(data);
    $(".city").html("<strong>City:</strong> " + data.name + ", " + data.sys.country);
    $(".temp").html("<strong>Temp:</strong> " + data.main.temp + " Celsius");
  } } )
}
function searchWeather() {
  var city = $('.city-input').val();
  $(".error-message").html('');
  $(".city-search").html('');
  $(".temp-search").html('');
  var url = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&units=metric&appid=" + apiKey;
  $.ajax(url, { success: function(data){
    //console.log(data);
    $(".city-search").html("<strong>City:</strong> " + data.name + ", " + data.sys.country);
    $(".temp-search").html("<strong>Temp:</strong> " + data.main.temp + " Celsius");
  }, error: function(err){
    $(".error-message").html("<strong style='color:red;'>City does not exist</strong>");
  }
} )
}