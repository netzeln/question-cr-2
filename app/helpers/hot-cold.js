import Ember from 'ember';

export function hotCold(params/*, hash*/) {
  if(params[0] >= 15){
    return params[0] + "HOT";
  }else if (params[0] <=6) {
    return params[0]+ "Cold";
  } else {
    return params;
  };
}

export default Ember.Helper.helper(hotCold);
