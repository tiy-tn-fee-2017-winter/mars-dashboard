import Ember from 'ember';

export default Ember.Route.extend({
  setupController(controller, model) {
    this._super(...arguments);

    controller.set('formValues', {
      ration: model,
      quantity: 0,
    });
  }
});
