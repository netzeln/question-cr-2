import Ember from 'ember';

export function hotCold(params/*, hash*/) {
  console.log(params[0]);
  console.log(params[1]);
  if(params[1] >= 20){
    return Ember.String.htmlSafe('<span class="hot">' +  params[0] + ' <span class="glyphicon glyphicon-fire "></span></span>');
  }else if (params[1] <= 4) {
    return Ember.String.htmlSafe('<span class="cold">' +  params[0] + ' <span class="glyphicon glyphicon-tint"></span></span>');
  } else {
    return params[0];
  };
}

export default Ember.Helper.helper(hotCold);
