import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  type: DS.attr('string'),
  quantity: DS.attr('number'),
  weight: DS.attr('number'),
  expiration: DS.attr('date')
});
