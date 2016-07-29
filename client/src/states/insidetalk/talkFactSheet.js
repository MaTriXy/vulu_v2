export class TalkFSController {

    /* @ngInject */
    constructor($localStorage, $scope, SearchModel, $stateParams) {

        this.autolinker = window.autolinker;
        this.$localStorage = $localStorage;
        this.$scope = $scope;
        this.SearchModel = SearchModel;
        this.$stateParams = $stateParams;

        this.objectID = this.$stateParams.objectID;
        this.fsResult = {};


        this.SearchModel.getById(this.objectID).
        then((searchFsresult_data)=>{
                this.fsResult = searchFsresult_data;

                this.$localStorage.fsResult = searchFsresult_data;
                console.log(searchFsresult_data);
                return searchFsresult_data;
            },(err)=>{
                console.log(err);
            });
    }

    getPicId(){
        //return picture id randomly
        return Math.random() * (30 - 1) + 1;
    }





}

