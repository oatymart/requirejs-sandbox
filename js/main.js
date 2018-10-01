console.log("Main.js is loaded.");

requirejs.config({
    paths: {
        handlebars: 'lib/handlebars',
        text: 'lib/text'
    },
    shim: {
        handlebars: {
            exports: 'Handlebars'
        }
    },
    packages: [{
        name: 'hbs',
        location: 'lib',
        main: 'hbs'
    }]
});

requirejs(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});

require(['lib/jquery.min', 'models/User', 'controllers/ListController'], function($, User, ListController) {
    
    // Make some users and store them locally:
    var users = ['Andy', 'Bob', 'Carly']
        .map(function(name) {
            return new User(name);
        });
    localStorage.users = JSON.stringify(users);

    // Render list:
    ListController.start(); 
});