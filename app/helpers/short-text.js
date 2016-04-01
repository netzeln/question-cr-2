import Ember from 'ember';

export function shortText(params) {
  if (params[0].length > 50) {
      return (params[0].substring(0, 50) + "...");
  }
  else {
  return params;
  }
}

export default Ember.Helper.helper(shortText);
