export class SearchController {

  /* @ngInject */
    constructor($localStorage, Search, $scope) {

    this.$localStorage  = $localStorage;
        this.Search = Search;
        this.$scope = $scope;


    }

  /**
   *
   * @returns {*}
   */
  getSearchResult() {
      alert("search");
      this.Search.getSearchResult(this.$scope.query)
      //const model = this.$localStorage.search;
      /*    this.Search.get(model).then(Search_data => {
      this.Search_data = Search_data;
      return Search_data;
    });
       */
  }

}
