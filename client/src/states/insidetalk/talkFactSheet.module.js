import { TalkFSController } from './search';
import template       from './search.html';

/* @ngInject */
function searchRoutes($stateProvider) {
  $stateProvider
    .state('home.search', {
      url: '/talkFS',
      template: template,
      controller: 'TalkFSController',
      controllerAs: 'talkFS'
    });
}

export default angular.module('states.talkFS', [])
  .controller('TalkFSController', TalkFSController)
