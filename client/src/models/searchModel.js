//var portfolio_json             = require('../../data/portfolioData.json');

export class SearchModel {

  /* @ngInject */
  constructor(Network) {
    this.Network = Network;

    // Paths



    this.searchResult = {};
  }


  get(query) {
    return this.Network.get(this.portfoliosCompositionPath, query)
      .then(portfolios => {
        const portfolios_data = portfolio_json.portfolioData
        angular.copy(portfolios_data, this.portfolios);
        return portfolios_data;
       // return portfolios;
      });
  }

  setModel (value){
    this.searchResult = value;
  }

  getModelValue(){
    return this.searchResult;
  }
}
