import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {
    first_name: '',
    last_name: '',
    role: '',
    skills: [],
    ssn: '',
    allergies: [],
    blood_type: '',
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
