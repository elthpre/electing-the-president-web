import DS from 'ember-data';

export default DS.Model.extend({
  model: DS.belongsTo('model',{ async: true }),//, {inverse: null}),
  role: DS.belongsTo('role',{ async: true }),//, {inverse: null}),
  action: DS.attr('string'),
  relation: DS.attr('string'),
  name: function(){
    return this.get('model.name') + ':' + this.get('action');
  }.property('model.name', 'action')
});
