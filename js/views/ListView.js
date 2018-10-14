define(['handlebars', 'lib/tpl!views/List'],
function(Handlebars, rawTemplate) {
    'use strict';

    function render(parameters) {
        var appDiv = document.getElementById('app');

        var users = parameters.users;
        var i, len;
        var template;

        // TODO: Get rid of all this HTML building by using a template
        var html = '<ul>';
        for (i = 0, len = users.length; i < len; i++){
            html += '<li>' + users[i].name + '</li>';
        }
        html += '</ul>';

        require(['lib/tpl!views/List'], function (rTemplate) {
            document.body.innerHTML = rTemplate({name: "Epeli"});
        });

        template = Handlebars.compile[rawTemplate];
        appDiv.innerHTML = template({users: users});
        //appDiv.innerHTML = precompiledTemplate({users: users});
        //appDiv.innerHTML = html;
    }

    return {
        render: render
    };
});