define([
    'underscore',
    'backbone'
], function(_, Backbone) {

    var forecastModel = Backbone.Model.extend({
        initialize: function (spec) {
            /*
            if (!spec || !spec.title || !spec.format) {
                throw "InvalidConstructArgs";
            }
            */

            this.validate(spec);
            // we may also want to store something else as an attribute
            // for example a unique ID we can use in the HTML to identify this
            // item's element. We can use the models 'cid' or 'client id for this'.
            this.set({
                htmlId: 'weather_' + this.cid
            });
        },
        validate: function (attrs) {
            /*
            if (attrs.title) {
                if (!_.isString(attrs.title) || attrs.title.length === 0 ) {
                    return "Title must be a string with a length";
                }
            }
            */
        }
    });

    return forecastModel;

});
