var apiKey = "b9bf4a7e880927fa5dc50e5cdd462ff0";
var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?";
var city = "rochester"; //local city for default
var foo;
//setting the on click event for the search and loging the city submitted
$('#citySearch').on('click', function(event) {
    event.preventDefault();

    foo = $(this)
    .siblings("#newCity")
    .val();
    city = foo;
    console.log(city);
    renderWeather();
});
//setting the on click for the city btn in nav
$(".city").on("click", function(event){
    event.preventDefault();
    cityBtn = $(this).text();
    city = cityBtn;
    console.log(city);
});