// Filename: views/projects/forecastList
define([
    'jquery',
    'underscore',
    'backbone',
    // Pull in the Collection module from above
    'collections/forecastCollection',
    'text!templates/forecasts/forecastListTmpl.html'

], function($, _, Backbone, forecastCollection, forecastListTemplate) {
    var forecastsListView = Backbone.View.extend({
        el: $("#page"),
        initialize: function() {
            this.collection = forecastCollection;
            this.collection.bind("add", this.exampleBind);
            this.collection = forecastCollection.add({ name: "Sunny"});
            this.collection = forecastCollection.add({ name: "Rain"});
            this.collection = forecastCollection.add({ name: "Cloudy", score: 20});
        },
        exampleBind: function(model) {
            //console.log(model);
        },
        render: function() {
            var data = {
                forecasts: this.collection.models,
                _: _
            };
            var compiledTemplate = _.template(forecastListTemplate, data);
            $("#page").html(compiledTemplate);
        }
    });
    return new forecastsListView;
});
