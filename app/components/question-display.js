import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    deleteQuestion(question){
      if(confirm('is this question REALLY worth deletion?')){
        this.sendAction('deleteQuestion', question);
      }
    }
  }
});
