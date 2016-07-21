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
                //todo ran - change onece i modify the data with personID
/*                this.picUrl = "https://graph.facebook.com/" + this.fsResult.question.personId  + "/picture?width=200&height=200"
                alt="profile-image";*/

                this.picUrl =
                this.$localStorage.fsResult = searchFsresult_data;
                console.log(searchFsresult_data);
                return searchFsresult_data;
            },(err)=>{
                console.log(err);
            });
    }


}

