import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit() {
      const change = this.model.change;
      const remaining = this.model.remaining;

      return remaining - change;
    },
  }
});
