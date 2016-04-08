import Ember from 'ember';

export default Ember.Route.extend({
  userName: Ember.inject.service(),
  
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
    updateAsk(question, params){

      Object.keys(params).forEach(function(key){
        if(params[key] !==undefined){
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question', question);
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
      //still very unclear here how things "know" what eachother are.
      var question = answer.get('question');
      answer.destroyRecord().then(function(){
        //the console will continually tell me that question.save 'is not a function' though it edits the database correctly
        question.save();
      });
      this.transitionTo('question', question);
    },
    updateAnswer(answer, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          answer.set(key, params[key]);
        }
      });
      answer.save();
      //this.transitionTo?????
    },
    likeAnswer(answer){
     var liked = answer.get('like');
     answer.set('like', liked + 1);
     answer.save();
   },
   dislikeAnswer(answer){
    var disliked = answer.get('dislike');
    answer.set('dislike', disliked + 1);
    answer.save();
   }
  }
});
