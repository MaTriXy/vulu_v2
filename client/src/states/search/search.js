export class SearchController {

  /* @ngInject */
    constructor($localStorage, $scope ,SearchModel) {

    this.$localStorage  = $localStorage;
        this.$scope = $scope;
        this.SearchModel = SearchModel;
        this.searchresult = {};


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
          return searchresult_data ;
      });
  }
}
