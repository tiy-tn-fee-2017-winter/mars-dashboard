import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async delete() {
      await this.model.destroyRecord();

      this.transitionToRoute('ration');
    }
  }
});
