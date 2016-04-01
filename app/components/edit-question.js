import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    update(question){
      var params = {
        theQuestion: this.get('theQuestion'),
        asker: this.get('asker'),
        date: Date(),
        inContext: this.get('inContext')
      };

      console.log('first function:', params);
      this.sendAction('updateAsk', question, params);
    }
  }
});
