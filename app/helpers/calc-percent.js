import Ember from 'ember';

export function calcPercent([total, curr]/* , hash*/) {
  return (curr / total) * 100;
}

export default Ember.Helper.helper(calcPercent);
