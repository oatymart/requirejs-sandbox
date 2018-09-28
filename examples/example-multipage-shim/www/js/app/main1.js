define(function (require) {
    var $ = require('jquery'),
        lib = require('./lib'), // not the dir, but lib.js
        // it will use MVC:
        controller = require('./controller/c1'),
        model = require('./model/m1'),
        backbone = require('backbone'),
        underscore = require('underscore');

    //A fabricated API to show interaction of
    //common and specific pieces.
    controller.setModel(model);
    $(function () {
        var $body = lib.getBody();
        controller.render($body);

        //Display backbone and underscore versions
        $body
            .append('<div>backbone version: ' + backbone.VERSION + '</div>')
            .append('<div>underscore version: ' + underscore.VERSION + '</div>');
    });
});
