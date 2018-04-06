import Component from '@ember/component';

export default Component.extend({
    model: Ember.Object.create({
        firstName: '',
        middleName: '',
        lastName: ''
    }),
    // rules hash for validation
    rules: {
        firstName: {
            required: {
                check: true,
                message: 'You must provide a first name'
            }
        },
        middleName: 'required',
        lastName: 'required'
    },
    actions: {
        textInput(isValid, value) {
            this.set('text', true);
            this.set('model.firstName', this.get('formData.firstName'));
            this.set('model.middleName', this.get('formData.middleName'));
            this.set('model.lastName', this.get('formData.lastName'));
        },

    }
});
