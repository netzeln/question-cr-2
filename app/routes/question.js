import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    deleteQuestion(question){
      return question.destroyRecord();

      this.transitionTo('index');
    },
    saveTheAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function){
        return question.save();
      });
      this.transitionTo('question', params.question);
    }
  }
});
