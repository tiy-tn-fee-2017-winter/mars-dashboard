import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    deleteMission(mission) {
      mission.destroyRecord();
    }
  }
});
