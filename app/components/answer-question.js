import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service(),

  actions: {
    answerQuestion(){
      // console.log("question:", this.question);
      var params = {
        answer: this.get('answer'),
        author: this.get('userName.theName'),
        date: Date(),
        whereGoogleSentMe: this.get('whereGoogleSentMe'),
        question: this.question,
        like: 0,
        dislike: 0
      };
      // console.log("qid", this.question._internalModel._data);
      // console.log(params);
      this.sendAction('saveAnswer', params);
    }
  }
});
