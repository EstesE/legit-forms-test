import Component from '@ember/component';
import { isBlank } from '@ember/utils';

export default Component.extend({

    randomItem: function (items) {
        return items[Math.floor(Math.random() * items.length)];
    },

    init() {
        this._super('...');
        this.set('user', this.randomItem(this.get('users'))); // I'm going to get a random user since I passed in an array of users.
    },

    // rules hash for validation
    rules: {
        first_name: {
            required: {
                check: true,
                message: 'You must provide a first name'
            }
        },
        // email: 'required',
        email: {
            inline: value => {
                // This is a test and not production tested validation.
                if (isBlank(value)) {
                    return 'Can\'t be blank';
                }
                if (value.indexOf('@') > -1) {
                    function validateEmail(email) {
                        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(String(email).toLowerCase());
                    };
                    if (validateEmail(value) !== true) {
                        return 'Check format';
                    }
                    return;
                } else {
                    return 'Check format';
                }
            }
        },
        last_name: 'required'
    }
});
