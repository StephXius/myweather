$(document).ready(function() {


    function MyWeatherURLWithSearchTerm(searchTerm) {
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + searchTerm + "&appid=3a06d15c961ffb4960611fa7a77d78af";
        return url;

    }

    function appendWeatherToBody(srcURL) {
        $('body').append('<center> <p>' + srcURL + '</p> </center>');
    }

    function callMyWeatherURLWithSearchTerm(searchTerm) {
        var url = MyWeatherURLWithSearchTerm(searchTerm);
        console.log(url);
        $.ajax({
            url: url,
            method: "GET",
            success: function(response) {
               
                var tempature = response.main.temp;
                    console.log(tempature);
                    appendWeatherToBody(tempature)
                    console.log(response);
                
                var humidity = response.main.humidity;
                    console.log(humidity);
                    appendWeatherToBody(humidity)
                    console.log(response);
                    
                var main = response.weather[0].main;    
                    console.log(main);
                    appendWeatherToBody(main)
                    console.log(response);
                    
                var description = response.weather[0].description;
                    console.log(description);
                    appendWeatherToBody(description)
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
