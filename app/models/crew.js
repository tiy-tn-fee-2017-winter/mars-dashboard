import DS from 'ember-data';

export default DS.Model.extend({
  firstName: DS.attr(),
  lastName: DS.attr(),
  role: DS.attr(),
  skills: DS.attr(),
  ssn: DS.attr(),
  allergies: DS.attr({
    defaultValue() { return []; }
  }),
  bloodType: DS.attr(),
  country: DS.attr(),

  mission: DS.belongsTo('mission'),
});
