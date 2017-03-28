import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return {
      name: 'Cheerios',
      quantity: 10,
      // change: 0,
      remaining: 10,
      id: 0,
    };
  }
});
