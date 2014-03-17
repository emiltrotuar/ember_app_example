App = Ember.Application.create();

App.Router.map(function() {
  this.resource('tasks', { path: '/' });
});

App.Task = DS.Model.extend({
  title: DS.attr('string')
});

App.TasksRoute = Ember.Route.extend({
  model: function() {
    return this.store.all('task');
  }
});

App.TasksController = Ember.ArrayController.extend({
  getRec: function(){
  	var nr = this.get('newrec');

  	var task = this.store.createRecord('task', {
      title: nr
    });
    task.save();
  }
});