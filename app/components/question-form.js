import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service('user-name'),

  actions: {
    askQuestion(){
     console.log(this.get('userName.theName.[0]'));
      var params = {
        theQuestion: this.get('theQuestion'),
        asker: this.get('userName.theName'),
        //this seems to do what I want, but I want just the value of the thing in the array and index [0] doesn't work. Either Way it's just an array in my database.
        date: Date(),
        inContext: this.get('inContext')
      };

      this.sendAction('saveAsk', params);
    }
  }
});
