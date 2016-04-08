import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service('user-name'),

  actions: {
    askQuestion(){
      
      var params = {
        theQuestion: this.get('theQuestion'),
        asker: this.get('asker'),
        date: Date(),
        inContext: this.get('inContext')
      };

      this.sendAction('saveAsk', params);
    }
  }
});
