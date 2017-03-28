import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      {
        name: 'Cheerios',
        quantity: 10,
        remaining: 10 - 0,
        id: 0,
      },
      {
        name: 'Fruit Loops',
        quantity: 10,
        remaining: 10 - 1,
        id: 1,
      },
      {
        name: 'Captn Crunch',
        quantity: 10,
        remaining: 10 - 2,
        id: 2,
      },
      {
        name: 'Something',
        quantity: 10,
        remaining: 10 - 3,
        id: 3,
      },
      {
        name: 'Cheerios',
        quantity: 10,
        remaining: 10 - 4,
        id: 4,
      },
      {
        name: 'Cheerios',
        quantity: 10,
        remaining: 10 - 5,
        id: 5,
      },
    ];
  }
});
