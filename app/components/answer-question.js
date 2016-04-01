import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    answerQuestion(){
      var params = {
        answer: this.get('answer'),
        author: this.get('author'),
        date: this.get('date'),
        whereGoogleSentMe: this.get('whereGoogleSentMe'),
        question: this.get('question')
      };
      console.log(params);
      this.sendAction('saveAnswer', params);
    }
  }
});
