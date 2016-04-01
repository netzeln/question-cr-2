import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    askQuestion(){
      var params = {
        theQuestion: this.get('theQuestion'),
        asker: this.get('asker'),
        date: this.get('date'),
        inContext: this.get('inContext')
      };
      console.log(params);
      this.sendAction('saveAsk', params);
    }
  }
});
