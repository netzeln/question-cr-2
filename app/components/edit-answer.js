import Ember from 'ember';

export default Ember.Component.extend({
  editAnswer: false,
  actions: {
    update(answer, editAnswer){
      var params = {
        theQuestion: this.get('theQuestion'),
        asker: this.get('asker'),
        date: Date(),
        inContext: this.get('inContext')
      };
      
      this.set('editAnswer', false);
      this.sendAction('updateAsk', answer, params);
    },
    showUpdate(editAnswer){

      if(this.editAnswer){
        this.set('editAnswer', false);
      }else{
        this.set('editAnswer', true);
      }
    }
  }
});
