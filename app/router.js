import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('inventory', function () {
    this.route('change', { path: '/:ration_id/inventory' });
  });
});

export default Router;
