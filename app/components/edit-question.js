import Ember from 'ember';

export default Ember.Component.extend({
  userName: Ember.inject.service('user-name'),
  editQuestion: false,
  actions: {
    update(question, editQuestion){
      var params = {
        theQuestion: this.get('theQuestion'),
        asker: this.get('userName.theName'),
        date: Date(),
        inContext: this.get('inContext')
      };
      console.log(editQuestion);
      this.set('editQuestion', false);
      this.sendAction('updateAsk', question, params);
    },
    showUpdate(editQuestion){
      console.log('something happned');
      console.log();
      if(this.editQuestion){
        this.set('editQuestion', false);
      }else{
        this.set('editQuestion', true);
      }
    }
  }
});
