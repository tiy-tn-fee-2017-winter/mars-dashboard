import Ember from 'ember';

export default Ember.Controller.extend({
  values: {
    email: '',
    password: '',
  },
  actions: {
    saveUser(changeset) {
      debugger;
    },
  },
});
