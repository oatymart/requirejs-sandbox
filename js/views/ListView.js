define(['../lib/handlebars', 'hbs!List.tpl'],
function(Handlebars, precompiledTemplate) {
    
    function render(parameters) {
        var appDiv = document.getElementById('app');

        var users = parameters.users;
        
        // TODO: Get rid of all this HTML building by using a template
        var html = '<ul>';
        for (var i = 0, len = users.length; i < len; i++){
            html += '<li>' + users[i].name + '</li>';
        }
        html += '</ul>';
        
        require(['hbs!List.tpl'], function (template) {
            document.body.innerHTML = template({name: "Epeli"});
        });

        // var template = Handlebars.compile[rawTemplate];
        appDiv.innerHTML = precompiledTemplate({users: users}); //html;
    }

    return {
        render: render
    };
});