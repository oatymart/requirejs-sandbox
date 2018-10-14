/* global requirejs */

console.log("Main.js is loaded.");

requirejs.config({
    baseUrl: 'js',
    paths: {
        handlebars: 'lib/handlebars.runtime',
        text: 'lib/text'
        // jquery
        // lodash
        // i18n
    },
    packages: [{
        name: 'hbs',
        location: 'lib',
        main: 'hbs'
    }]
});

requirejs(["helper/util"], function(util) {
    'use strict';
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});

require(['lib/jquery.min', 'models/User', 'controllers/ListController'], function($, User, ListController) {
    'use strict';
    // Make some users and store them locally:
    var users = ['Andy', 'Bob', 'Carly']
        .map(function(name) {
            return new User(name);
        });
    localStorage.rjs_sb_users = JSON.stringify(users);

    // Render list:
    ListController.start();
});