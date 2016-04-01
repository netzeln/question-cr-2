import DS from 'ember-data';

export default DS.Model.extend({
  theQuestion: DS.attr(),
  asker: DS.attr(),
  date: DS.attr(),
  inContext: DS.attr(),
  answers: DS.hasMany('answer', {async: true})
});
