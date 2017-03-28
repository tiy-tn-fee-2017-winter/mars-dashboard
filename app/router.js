import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('crew', function () {
    this.route('new');
    this.route('edit');
    this.route('member');
  });

  this.route('mission', function () {
    this.route('create');

    this.route('edit', {
      path: '/:mission_id/edit'
    });
  });
});

export default Router;
