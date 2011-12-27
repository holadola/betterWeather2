// Filename: router.js
define([
    'jquery',
    'underscore',
    'backbone',
    'views/home/mainView',
    'views/forecasts/forecastList',
    'views/forecasts/forecastView'

], function($, _, Backbone, mainHomeView, forecastListView, forecastView) {
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            'forecasts': 'showForecasts',
            'forecast': 'showForecast',

            // Default
            '*actions': 'defaultAction'
        },

        showForecasts: function() {
            // Call render on the module we loaded in via the dependency array
            // 'views/projects/list'
            forecastListView.render();
        },

        showForecast: function() {
            // Call render on the module we loaded in via the dependency array
            // 'views/projects/list'
            forecastView.render();
        },

        defaultAction: function(actions) {
            // We have no matching route, lets display the home page
            mainHomeView.render();
        }


    });

    var initialize = function() {
        var app_router = new AppRouter;
        Backbone.history.start();
    };
    return {
        initialize: initialize
    };
});
