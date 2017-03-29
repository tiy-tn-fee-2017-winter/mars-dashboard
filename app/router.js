import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('ration', { path: '/rations' }, function () {
    this.route('new');
    this.route('edit', { path: '/:ration_id/edit' });

    this.route('detail', { path: '/:ration_id' });
  });
});

export default Router;
