import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async saveMission(changeset) {
      await changeset.save();

      this.transitionToRoute('dashboard.mission.index');
    },
  }
});
