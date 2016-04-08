import Ember from 'ember';

export default Ember.Service.extend({
  theName: ["an0nym0us"],

  loginName(name){

    console.log("pre", this.get("theName.[]"));
    this.get('theName').setObjects([]);
    this.get('theName').pushObject(name);
      console.log("post", this.get("theName.[]"));

    }



});
