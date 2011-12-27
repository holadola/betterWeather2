// Filename: views/projects/forecastView
define([
    'jquery',
    'underscore',
    'backbone',
    // Pull in the Collection module from above
    'models/forecastModel',
    'collections/forecastCollection',
    'text!templates/forecasts/forecastViewTmpl.html'

], function($, _, Backbone, forecastModel, forecastCollection, forecastViewTemplate) {
    var forecastView = Backbone.View.extend({

        el: $("#page"),

        initialize: function() {
            /*
             this.collection = forecastCollection;
             this.collection.bind("add", this.exampleBind);
             this.collection = forecastCollection.add({ name: "Sunny"});
             */
        },

        exampleBind: function(model) {
            //console.log(model);
        },

        render: function(model) {
            var data = {
                forecast_information: model.get("forecast_information"),
                current_conditions : model.get("current_conditions"),
                forecast_conditions : model.get("forecast_conditions"),
                _: _
            };

            var compiledTemplate = _.template(forecastViewTemplate, data);
            $("#page").html(compiledTemplate);
        }
    });
    return new forecastView;
});
