define(['views/ListView'], function(ListView) {
    'use strict';

    function start() {
        var users = JSON.parse(localStorage.rjs_sb_users);
        ListView.render({users: users});
    }

    return {
        start: start
    };
});