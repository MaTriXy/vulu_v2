export class Auth {

    /* @ngInject */
    constructor($q, $translate, $sessionStorage, Network) {
        this.$q = $q;
        this.$translate = $translate;
        this.$sessionStorage = $sessionStorage;
        this.Network = Network;
        this.auth = firebase.auth();
    }

    login(credentials) {
        let deferred = this.$q.defer();
        const userCredentials = {
            'UserName': credentials.email,
            'PassWord': credentials.password,
        };

        this.auth.signInWithEmailAndPassword(credentials.email, credentials.password)
            .then((value)=> {
                //success
                deferred.resolve(value);
            }, (reason)=> {
                let failureMessage = "auto error : errorCode " + reason.code + "errorMessage: " + reason.message;
                deferred.reject(failureMessage);

            });

        return deferred.promise;

    }

    fbLogin() {
        let deferred = this.$q.defer();

        // First, we perform the signInWithRedirect.
        // Creates the provider object.
        var provider = new firebase.auth.FacebookAuthProvider();
        // You can add additional scopes to the provider:
        provider.addScope('email');
        provider.addScope('user_friends');
        // Sign in with redirect:
        this.auth.signInWithRedirect(provider)
        ////////////////////////////////////////////////////////////
        // The user is redirected to the provider's sign in flow...
        ////////////////////////////////////////////////////////////
        // Then redirected back to the app, where we check the redirect result:
        this.auth.getRedirectResult().then(function (result) {
            // The firebase.User instance:
            var user = result.user;
            // The Facebook firebase.auth.AuthCredential containing the Facebook
            // access token:
            var credential = result.credential;
            deferred.resolve(value);
        }, function (error) {
            // The provider's account email, can be used in case of
            // auth/account-exists-with-different-credential to fetch the providers
            // linked to the email:
            var email = error.email;
            // The provider's credential:
            var credential = error.credential;
            // In case of auth/account-exists-with-different-credential error,
            // you can fetch the providers using this:
            if (error.code === 'auth/account-exists-with-different-credential') {
                this.auth.fetchProvidersForEmail(email).then(function (providers) {
                    // The returned 'providers' is a list of the available providers
                    // linked to the email address. Please refer to the guide for a more
                    // complete explanation on how to recover from this error.
                });
            }
            let failureMessage = "auto error : errorCode " + error.code + "errorMessage: " + error.message;
            deferred.reject(failureMessage);

        });

        return deferred.promise;

        //option 2
        /* var provider = new firebase.auth.FacebookAuthProvider();
         provider.addScope('email');

         firebase.auth().signInWithPopup(provider)
         .then((value)=> {
         //success
         deferred.resolve(value);
         }, (reason)=> {
         let failureMessage = "auto error : errorCode " + reason.code + "errorMessage: " + reason.message;
         deferred.reject(failureMessage);

         });*/
    }

    signUp(credentials) {
        let deferred = this.$q.defer();
        const userCredentials = {
            'UserName': credentials.email,
            'PassWord': credentials.password,
        };

        this.auth.createUserWithEmailAndPassword(credentials.email, credentials.password)
            .then((value)=> {
                //success
                deferred.resolve(value);
            }, (reason)=> {
                let failureMessage = "auto error : errorCode " + reason.code + "errorMessage: " + reason.message;
                deferred.reject(failureMessage);

            });

        return deferred.promise;


    }

    resetPassword(email) {
        let deferred = this.$q.defer();

        this.auth.sendPasswordResetEmail(email)
            .then((value)=> {
                //success
                deferred.resolve(value);
            }, (reason)=> {
                let failureMessage = "auto error : errorCode " + reason.code + "errorMessage: " + reason.message;
                deferred.reject(failureMessage);

            });

        return deferred.promise;

    }
    /**
     *
     * @returns {*}
     */
    getSearchResult() {
        let searchResult = this.Search.getSearchResult(this.$scope.query)
        console.log("searchResult" + searchResult);
        //const model = this.$localStorage.search;
        /*    this.Search.get(model).then(Search_data => {
         this.Search_data = Search_data;
         return Search_data;
         });
         */
    }

    getToken() {
        return this.$sessionStorage.authData && this.$sessionStorage.authData.Token;
    }

    setToken(token) {
        this.$sessionStorage.authData = this.$sessionStorage.authData || {};
        this.$sessionStorage.authData.Token = token;
        this._authData = this.$sessionStorage.authData;
    }

    setUserId(id) {
        this.$sessionStorage.authData = this.$sessionStorage.authData || {};
        this.$sessionStorage.authData.UserID = id;
        this._authData = this.$sessionStorage.authData;
    }

    getAuthData() {
        return this._authData;
    }

    deleteLocalStorage() {
        delete this.$sessionStorage.authData;
    }

}
