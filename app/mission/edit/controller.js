import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    async saveMission(changeset) {
      await changeset.save();

      this.transitionToRoute('mission.index');
      // SAME AS DOING:
      // this.model.save().then(() => {
      //   this.transitionToRoute('mission.index');
      // });
    },
  }
});
