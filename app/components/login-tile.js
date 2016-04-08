import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service('user-name'),

  actions: {
    loginUser(name){
      this.get('userName').loginName(name);
    }
  }
});
