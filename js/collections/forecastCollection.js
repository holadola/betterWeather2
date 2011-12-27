define([
    'jquery',
    'underscore',
    'backbone',
    'models/forecastModel'
], function($, _, Backbone, forecastModel) {
    var forecastCollection = Backbone.Collection.extend({
        model: forecastModel,
        initialize: function() {

        }

    });

    return new forecastCollection;
});
