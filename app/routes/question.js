import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    deleteQuestion(question){
      return question.destroyRecord();

      this.transitionTo('index');
    }
  }
});
