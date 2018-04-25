$(document).ready(function() {


    function MyWeatherURLWithSearchTerm(searchTerm) {
        var url = "https://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=3a06d15c961ffb4960611fa7a77d78af";
        var zipcode = "https://api.openweathermap.org/data/2.5/weather?zip=" + searchTerm + ",us"

        ;
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
                var weather_url = response.city.name;
                console.log(weather_url);
                appendWeatherToBody(weather_url)

                console.log(response)
            },

        });
    }

    $('button').click(function() {
        var searchTerm = $('#srch-term').val();
        console.log(searchTerm);
        callMyWeatherURLWithSearchTerm(searchTerm);

    });































});
