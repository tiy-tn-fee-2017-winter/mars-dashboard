import DS from 'ember-data';

export default DS.Model.extend({
  first_name: DS.attr(),
  last_name: DS.attr(),
  role: DS.attr(),
  skills: DS.attr(),
  ssn: DS.attr(),
  allergies: DS.attr(),
  blood_type: DS.attr(),
  country: DS.attr(),

  mission: DS.belongsTo('mission'),
});
