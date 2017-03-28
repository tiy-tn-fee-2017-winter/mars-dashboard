import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    firstName: '',
    lastName: '',
    role: '',
    skills: [],
    ssn: '',
    allergies: [],
    bloodType: '',
    country: '',
  },

  actions: {
    submitForm() {
      const member = this.store.createRecord('crew', this.formValues);

      member.save().then(() => {
        this.set('formValues', {});
        this.transitionToRoute('crew.index');
      });
    },
  }
});
