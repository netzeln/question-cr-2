import Ember from 'ember';

export default Ember.Route.extend({
  userName: Ember.inject.service('user-name'),
});
