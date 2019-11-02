var apiKey = 'b9bf4a7e880927fa5dc50e5cdd462ff0';
var queryURL = 'https://api.openweathermap.org/data/2.5/forecast?';
var city = ""; //local city for default
var foo;
//setting the on click event for the search and loging the city submitted
$('#citySearch').on('click', function(event) {
    event.preventDefault();

    foo = $(this)
    .siblings("#newCity")
    .val();
    city = foo;
    console.log(city);
    //renderWeather();
});
//setting the on click for the city btn in nav
$(".city").on("click", function(event){
    event.preventDefault();
    cityBtn = $(this).text();
    city = cityBtn;
    console.log(city);
});

function renderWeather() {

  $.ajax({
    url: queryURL, //API Call
    dataType: "json",
    type: "GET",
    data: {
      q: city,
      appid: apiKey,
      units: "imperial",
      cnt: "6"
    },
    success: function(data) {
      var lat = data.city.coord.lat;
      var lon = data.city.coord.lat;
      // getUVIndex(lat, lon);
      var today = moment().format("MMM Do YYYY");
      var wf = "";
      var forecastList = $('<ul>')
      var cD = '';
      cD += "<h2>" + data.city.name + "</h2>"; 
      console.log(data);
      cD += '<p>';
      cD += '<b>' + today + ' </b>';
      cD += '<p>Temp: ' + data.list[0].main.temp_max + '&degF </p>';
      cD += '<p>Humidity: ' + data.list[0].main.humidity + '</p>';
      cD += '<p>Wind Speed: ' + data.list[0].wind.speed + '</p>';
      cD += '<p><span>' + data.list[0].weather[0].description + '</span></p>'; 
      cD += "<img src='https://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png'>";
      cD += "</p>"
      $('.weather').html(cD);
  
      for (var i =1; i<6; i++) {
        var val = data.list[i];
        var day = moment().add(i, 'day').format("MMM Do YYYY");
        wf += "<li>"
        wf += "<img src='https://openweathermap.org/img/w/" + val.weather[0].icon + ".png'>"
        wf += "<p>" + day  + "</p> " 
        wf += '<p>Temperature High: ' + val.main.temp + "&degF" + ' ' + '</p>';
        wf += '<p>Humidity: ' + val.main.humidity + '</p>';
        wf += "<span>" + val.weather[0].description + "</span>";
        wf += "</li>"
      };
      forecastList.append(wf);
      $(".forecast").html(forecastList);
    }
  });
  }
renderWeather();
