// Filename: views/home/main
define([
    'jquery',
    'underscore',
    'backbone',
    'models/forecastModel',
    'collections/forecastCollection',
    'text!templates/home/mainViewTmpl.html',
    'views/forecasts/forecastView'
], function($, _, Backbone, forecastModel, forecastCollection, mainHomeTmpl, forecastView) {

    var mainHomeView = Backbone.View.extend({
        el: $("#page"),

        events: {
            // any user events (clicks etc) we want to respond to
            "submit #locationForm" : "getForecast"
        },

        render: function() {
            this.el.html(mainHomeTmpl);
        },

        getForecast : function(e) {
            var self = this, loc, forecast, successFunc;

            e.preventDefault();

            loc = $(this.el).find("#search-location").val();

            forecastCollection.reset();
            forecastCollection.url = "/getforecast/" + encodeURIComponent(loc);
            forecastCollection.fetch();

//FAKE RESPONSE
forecastCollection.add(this.fakeResponse);

            var fakeModel = new forecastModel(this.fakeResponse);
            forecastView.render(fakeModel);

        },
        fakeResponse : {
                forecast_information : {
                    city : "Stockholm",
                    postal_code : "Stockholm",
                    forecast_date : "2011-12-26",
                    current_date_time : "1970-01-01 00:00:00 +0000",
                    unit_system : "US"
                },
                current_conditions : {
                    condition : "Mostly Cloudy",
                    temp_f : "52",
                    temp_c : "11",
                    humidity : "Humidity: 82%",
                    icon : "/ig/images/weather/mostly_cloudy.gif",
                    wind_condition : "Wind: SW at 15 mph"
                },
                forecast_conditions : [{
                    day_of_week : "Mon",
                    low : "43",
                    high : "46",
                    icon : "/ig/images/weather/mostly_sunny.gif",
                    condition : "Mostly Sunny"
                },
                {
                    day_of_week : "Tue",
                    low : "32",
                    high : "46",
                    icon : "/ig/images/weather/mostly_sunny.gif",
                    condition : "Mostly Sunny"
                },
                {
                    day_of_week : "Wed",
                    low : "37",
                    high : "39",
                    icon : "/ig/images/weather/mostly_sunny.gif",
                    condition : "Partly Sunny"
                },
                {
                    day_of_week : "Thu",
                    low : "30",
                    high : "39",
                    icon : "/ig/images/weather/chance_of_rain.gif",
                    condition : "Chance of Rain"
                }]
            }


    });
    return new mainHomeView;
});
