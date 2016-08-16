import {auto }           from 'algoliasearch'


export class SearchController {

    /* @ngInject */
    constructor($localStorage, $scope, SearchModel, $location, $stateParams, $state , GLOBALS) {

        this.autolinker = window.autolinker;
        this.$localStorage = $localStorage;
        this.$scope = $scope;
        this.$location = $location;
        this.$stateParams = $stateParams;
        this.$state = $state;
        this.closed = false;
        this.SearchModel = SearchModel;
        this.searchresult = {};
        this.query = $location.search().query;
        this.queryId = this.$localStorage.queryId;

        if (this.queryId){
            this.query = this.queryId;
            this.$localStorage.queryId = null;
        }
        this.$location.search({query: ""});
        this.GLOBALS = GLOBALS;
        this.groupName = GLOBALS.groupNameTheWeek;


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
        this.$location.search({query: query});

        this.SearchModel.get(model).then(searchresult_data => {
            //searchresult_data = this.modifyResult(searchresult_data);
            this.searchresult = searchresult_data;
            this.$localStorage.searchresult = searchresult_data;
            return searchresult_data;
        });
    }

    go2FS(hit) {
        this.$state.go('home.talkFS', {objectID: hit.objectID});
    }

    closing(){
		this.closed = true;
	}
	
    ngBindHtml(hit) {
        return hit._highlightResult.question.message.value;
    }

    modifyResult(searchresult_data) {
        searchresult_data.hits.forEach((element, index, array)=>{
            //if _highlighted result length is greater than X we will modify it and and leave only part of the
            if (element._highlightResult.question.message.value.length > 100){
                element._highlightResult.question.message.modifyValue = element._highlightResult.question.message.value;
                element._highlightResult.question.message.originalValue = element._highlightResult.question.message.value;

            }
        })
    }

}
