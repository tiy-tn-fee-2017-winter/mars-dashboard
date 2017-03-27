import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    save() {
      const fuel = this.store.createRecord('fuel', this.formValues);

      fuel.save().then(() => {
        this.set('formValues', {});
      });
    }
  }
});
