import Ember from 'ember';

export default Ember.Component.extend({

  actions:{
    deleteAnswer(answer){
      if(confirm('is this answer REALLY worth deletion?')){
        
        this.sendAction('deleteAnswer', answer);
      }
    }
  }
});
