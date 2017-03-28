import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    updateQuantity() {
      const change = this.model.change;
      const startingValue = this.model.remaining;

      const remaining = startingValue - change;

      return this.model.remaining = remaining

        .then(() => {
          this.transitionToRoute('inventory.index');
        });
    },
  }
});
