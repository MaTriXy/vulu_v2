import template from './header.html';

class HeaderController {

    /* @ngInject */
    constructor($localStorage, $scope, Auth, $state, SearchModel, $location ,algolia , $timeout) {
        this.$localStorage = $localStorage;
        this.$scope = $scope;
        this.Auth = Auth;
        this.$state = $state;
        this.SearchModel = SearchModel;
        this.$location = $location;
        this.fullscreenSearch = false;
        this.algolia = algolia;
        this.$timeout = $timeout;

        /*this.client = this.algolia.Client('2K1ULUZLUW', '16f42d05d731eaf17e018a0442ff1fb2');
        this.index = this.client.initIndex('group');

        autocomplete('#search-input', { hint: false }, [
            {
                source: autocomplete.sources.hits(this.index, { hitsPerPage: 5 }),
                displayKey: 'question',
                templates: {
                    suggestion: function(suggestion) {
                        return suggestion._highlightResult.question.message.value;
                    }
                }
            }
        ]).on('autocomplete:selected', function(event, suggestion, dataset) {
            console.log(suggestion, dataset);
        })*/;

    }

    search() {
        this.$timeout(()=> {
            this.$location.search({query: this.query});
            this.onSearch({query: this.query});
        }, 0);
    }

    login() {
        let credentials = {};
        credentials.email = this.$scope.email;
        credentials.password = this.$scope.password;
        this.Auth.login(credentials)
            .then((result)=> {
                //success
                // The signed-in user info.
                this.Auth.setToken(result.refreshToken);
                this.Auth.setUserId(result.uid);
            }, (reason)=> {
                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);

            });
    }



	gofullScreen() {
		this.fullscreenSearch = true;
	};
	
	closeFullScreen() {
		this.fullscreenSearch = false;	
	}

    signUp() {
        let credentials = {};
        credentials.email = this.$scope.email;
        credentials.password = this.$scope.password;
        this.Auth.signUp(credentials)
            .then((result)=> {
                //success
                // The signed-in user info.
                this.Auth.setToken(result.refreshToken);
                this.Auth.setUserId(result.uid);
            }, (reason)=> {
                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);

            });
    }

;

    fbLogin() {
        this.Auth.fbLogin()
            .then((value)=> {
                //success
                this.Auth.setToken(result.refreshToken);
                this.Auth.setUserId(result.uid);
            }, (reason)=> {
                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
            });

    }

    resetPassword(email) {
        this.Auth.resetPassword(this.$scope.email)
            .then((value)=> {
                //success
                //todo ran - raise modal
            }, (reason)=> {
                console.log("auto error : errorCode " + reason.code + "errorMessage: " + reason.message);
            });
    }

    /**
     * Check if user is already logged in based on the authData
     */
    isLoggedIn() {
        return this.Auth.getAuthData();
    }

    /**
     * Create a list of all languages supported and defined by the broker (from attribute)
     */
    getLanguagesList() {
        //TODO: Remove this hard coded after product adds attribute
        //let langList = this.GroupAttributes.getLangList();
        let langList = {
            "en-US": {code: "en-US", displayname: "lblEnglish"},
            "ja-JP": {code: "ja-JP", displayname: "lblJapanese"},
            "zh-CN": {code: "zh-CN", displayname: " lblChineseCN"},
            "ru-RU": {code: "ru-RU", displayname: "lblRussian"},
            "zh-CHT": {code: "zh-CHT", displayname: " lblChineseCHT"}
        };

        // Parse data for the Dropdown component
        return _.map(langList, lang => {
            return {
                text: this.$translate.instant(lang.displayname),
                iconClass: lang.code
            };
        });
    }

    /**
     * On Languages dropdown selection
     *
     * @param  {Object} selection Option object (text, iconClass)
     */
    languageChange(selection) {
        this.languagesDropdown.mainIconClass = selection.iconClass;

        //this.GroupTranslations.setCurrentLanguage(selection.iconClass);

        // Fetch translations for the selected language
        //this.$translate.use(this.GroupTranslations.getCurrentLanguage());
        this.$translate.use('en-US');
    }
}


export function header() {
    return {
        restrict: 'E',
        template: template,
        replace: true,
        scope: {},
        bindToController: {
            onSearch: '&',
            query: '='
        },
        controller: HeaderController,
        controllerAs: 'Header',
        link: (scope, elem, attr, ctrl) => {
            angular.element(document.querySelector('#search-input')).on('keypress', (e)=> {
                ctrl.search();
            });
        }

    }
}
