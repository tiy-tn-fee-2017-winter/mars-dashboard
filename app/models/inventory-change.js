import DS from 'ember-data';

export default DS.Model.extend({
  quantity: DS.attr(),
  date: DS.attr(),

  ration: DS.belongsTo('ration')
});
