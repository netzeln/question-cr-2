import Ember from 'ember';

export default Ember.Route.extend({
  actions:{
    deleteQuestion(question){
      var answer_deletions = question.get('answers').map(function(answer){
      return answer.destroyRecord();
    });
    Ember.RSVP.all(answer_deletions).then(function(){
      return question.destroyRecord();
    })
    this.transitionTo('index');
  },
    saveTheAnswer(params){
      var newAnswer = this.store.createRecord('answer', params);
      console.log("the q:", params.question);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save().then(function(){
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    deleteAnswer(answer){
      console.log("qjs:", answer);
      var question = answer.get('question');
      console.log("qjsq", answer.question);
      answer.destroyRecord().then(function(){
        question.save();
      });
      this.transitionTo('question', question);
    }
  }
});
