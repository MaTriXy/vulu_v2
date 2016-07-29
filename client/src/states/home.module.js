import { HomeController } from './home';
import homeTemplate       from './home.html';
import login              from './login/login.module';
import search             from './search/search.module.js';
import talkFactSheet      from './insidetalk/talkFactSheet.module.js';


/* @ngInject */
function appRoutes($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            abstract: true,
            template: homeTemplate,
            controller: 'HomeController',
            controllerAs: 'Home'
        });

    $urlRouterProvider.otherwise('/search');
}

function initFireBase() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyDIkFnHkvgxoDmlM1oAAnjWfvsdvDDUJj8",
        authDomain: "startupsknowelgedb.firebaseapp.com",
        databaseURL: "https://startupsknowelgedb.firebaseio.com",
        storageBucket: "startupsknowelgedb.appspot.com",
    };
    firebase.initializeApp(config);
}

export default angular.module('stratupDB.app', [
    login.name,
    search.name,
    talkFactSheet.name
])
    .controller({HomeController})
    .config(appRoutes)
    .config(initFireBase)
