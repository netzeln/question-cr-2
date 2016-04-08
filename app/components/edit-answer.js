import Ember from 'ember';

export default Ember.Component.extend({
  editAnswer: false,
  actions: {
    updateAnswer(answer, editAnswer){
      var params = {
        answer: this.get('newAnswer'),
        author: this.get('author'),
        date: Date(),
        whereGoogleSentMe: this.get('whereGoogleSentMe'),
        question: this.question,
      };

      this.set('editAnswer', false);
      this.sendAction('updateAnswer', answer, params);
    },
    showUpdate(){

    this.sendAction('showUpdate', answer);
    }
  }
});
