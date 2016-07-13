import { Auth }     from './auth';
import { Signup }   from './sign-up';
import { Network }  from './network';
import { Search }  from './search.js';


//Factories
import  { translationLoader } from './translation-loader'


export default angular.module('si.services', [])
    .service('Auth', Auth)
    .service('Signup', Signup)
    .service('Network', Network)
    .service('Search', Search)

    //Factories
    .factory('translationLoader', translationLoader);