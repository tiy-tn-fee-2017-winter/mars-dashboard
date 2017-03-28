import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    async submitForm() {
      const member = this.store.createRecord('crew', this.formValues);

      await member.save();

      this.set('formValues', {});
      this.transitionToRoute('crew.index');
    }
  }
});
