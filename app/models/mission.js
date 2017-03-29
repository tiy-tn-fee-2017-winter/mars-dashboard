import DS from 'ember-data';

export default DS.Model.extend({
  objective: DS.attr('string'),
  location: DS.attr('string'),
  launchTime: DS.attr('string'),
  duration: DS.attr('number'),
  hostCountry: DS.attr('string'),

  crew: DS.hasMany('crew'),
});
