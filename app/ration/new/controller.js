import Ember from 'ember';

export default Ember.Controller.extend({
  types: [
    'Beverage',
    'Condiment',
    'Fresh Food',
    'Intermediate Moisture',
    'Irradiated',
    'Rehydratable Food',
    'Thermostabilized',
  ],

  actions: {
    async saveRation(formValues) {
      const ration = this.store.createRecord('ration', formValues);

      await ration.save();
      this.transitionToRoute('ration.index');
    }
  }
});
