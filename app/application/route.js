import Route from '@ember/routing/route';
import fetch from 'fetch';
import RSVP from 'rsvp';

export default Route.extend({
    model() {
        let users = fetch('http://localhost:3000/users').then(function (response) {
            return response.json();
        });
        
        return RSVP.hash({
            users: users
        });
    },

    afterModel(model) {
        model.users = model.users[0];
    }

});
