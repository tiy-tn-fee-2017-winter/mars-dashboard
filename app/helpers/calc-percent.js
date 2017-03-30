import Ember from 'ember';

export function calcPercent([total, curr]/* , hash*/) {
  return Ember.String.htmlSafe(`width: ${(curr / total) * 100}%`);
}

export default Ember.Helper.helper(calcPercent);
