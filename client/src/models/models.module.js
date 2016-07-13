import { UserData }          from './user-data';
import { Portfolios }        from './portfolios';
import { ErrorCodes }        from './error-codes';

export default angular.module('si.models', [])
  .service('UserData', UserData)
  .service('Portfolios', Portfolios)
  .service('ErrorCodes', ErrorCodes)
