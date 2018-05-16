$(document).ready(function() {


    function MyWeatherURLWithSearchTerm(searchTerm) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=3a06d15c961ffb4960611fa7a77d78af";
        return url;

    }

    function appendWeatherToBody(srcURL) {
        $('body').append('<p>' + srcURL + '</p>');
    }

    function callMyWeatherURLWithSearchTerm(searchTerm) {
        var url = MyWeatherURLWithSearchTerm(searchTerm);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
               
                var weather_url = response.weather.main;
                var weather_url = response.main.temp;
                console.log(weather_url);
                appendWeatherToBody(weather_url)
                console.log(response);
                
            },

        });
    }

    $('button').click(function() {
        var searchTerm = $('#srch-term').val();
        console.log(searchTerm);
        callMyWeatherURLWithSearchTerm(searchTerm);

    });































});
