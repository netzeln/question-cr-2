import Ember from 'ember';

export default Ember.Component.extend({
editAnswer: false,
  actions:{
    deleteAnswer(answer){
      if(confirm('is this answer REALLY worth deletion?')){

        this.sendAction('deleteAnswer', answer);
      }
    },
    updateAnswer(answer, params){
      this.sendAction('updateAnswer', answer, params)
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
