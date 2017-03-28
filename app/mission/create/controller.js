import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    async saveMission() {
      const mission = this.store.createRecord('mission', this.formValues);

      await mission.save();

      this.set('formValues', {});
      this.transitionToRoute('mission.index');
    }
  }
});
