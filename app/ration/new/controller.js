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
    saveRation(formValues) {
      const ration = this.store.createRecord('ration', formValues);

      ration.save();
    }
  }
});
