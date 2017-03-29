import Ember from 'ember';

export default Ember.Controller.extend({
  formValues: {},

  actions: {
    async submitForm() {
      const mission = this.model;
      const member = this.store.createRecord('crew', this.formValues);
      member.set('mission', mission);

      await member.save();

      this.set('formValues', {});
      this.transitionToRoute('dashboard.mission.detail.crew.index');
    }
  }
});
