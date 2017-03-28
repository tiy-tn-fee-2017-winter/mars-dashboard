import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {

  },
  types: [
    'Beverage',
    'Condiment',
    'Fresh Food',
    'Intermediate Moisture',
    'Irradiated',
    'Rehydratable Food',
    'Thermostabilized',
  ]
});
