// Filename: app.js
define([
    'jquery',
    'modernizr',
    'underscore',
    'backbone',
    'router', // Request router.js
    'jqueryPlugins/jqueryPlaceholder/jqueryPlaceholder'
        
], function($, Modernizr, _, Backbone, Router) {
    var initialize = function() {
        // Pass in our Router module and call it's initialize function
        Router.initialize();
    };

    return {
        initialize: initialize
    };
});
