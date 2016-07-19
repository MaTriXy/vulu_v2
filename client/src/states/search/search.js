import {auto }           from 'algoliasearch'


export class SearchController {

    /* @ngInject */
    constructor($localStorage, $scope, SearchModel, $location, $stateParams, $state) {

        this.autolinker = window.autolinker;
        this.$localStorage = $localStorage;
        this.$scope = $scope;
        this.$location = $location;
        this.$stateParams = $stateParams;
        this.$state = $state;

        this.SearchModel = SearchModel;
        this.searchresult = {};
        this.query = $location.search().query;

        if (this.query) {
            this.getSearchResult(this.query);
        }


        /*this.$scope.$watchCollection(
         () => this.searchresult,
         (newVal) => {
         if (!_.isEmpty(newVal)) {

         }
         }
         );*/

    }

    /**
     *
     * @returns {*}
     */
    getSearchResult(query) {
        const model = query;
        this.SearchModel.get(model).then(searchresult_data => {
            this.searchresult = searchresult_data;
            this.$localStorage.searchresult = searchresult_data;
            return searchresult_data;
        });
    }

    go2FS(hit) {
        this.$state.go('home.talkFS', {objectID: hit.objectID});
    }

    ngBindHtml(hit) {
        return hit._highlightResult.question.message.value;
    }

}
