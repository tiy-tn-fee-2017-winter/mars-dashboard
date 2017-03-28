import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    subtractRations() {
      // ??? WTF ???
      // 1. set a starting value
      // 2. bind model.remaining to style: width= '?' of .progress-bars
      const starting = 100;
      const remaining = model.remaining * 10;
    }
  }
});
