import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
    notifications: service('toast'),

    actions: {
        saveUser(user, isValid) {
            if (isValid) {
                // Save user?
                let notifications = this.get('notifications');
                notifications.success(`${user.first_name} ${user.last_name} saved successfully.<br/><span class="note">Not really... but you could show something like this when they are actually saved.</span>`, `User Saved`, { progressBar: false, timeOut: 5000 });
            }
        }
    }
});
