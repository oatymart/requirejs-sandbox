console.log("Main.js is loaded.");

requirejs(["helper/util"], function(util) {
    //This function is called when scripts/helper/util.js is loaded.
    //If util.js calls define(), then this function is not fired until
    //util's dependencies have loaded, and the util argument will hold
    //the module value for "helper/util".
});

require(['Models/User'], function(User) {
    
    var users = ['Andy', 'Bob', 'Carly']
        .map(function(name) {
            return new User(name);
        });
    
    for (var i = 0, len = users.length; i < len; i++) {
        console.log(users[i].name);
    }
    
    localStorage.users = JSON.stringify(users);
});