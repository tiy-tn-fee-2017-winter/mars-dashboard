import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async updateQuantity(changeset) {
      changeset.save();

      const inventoryChange = this.store.createRecord('inventory-change', this.formValues);

      await inventoryChange.save();

      this.transitionToRoute('dashboard.inventory');
    },
  }
});
