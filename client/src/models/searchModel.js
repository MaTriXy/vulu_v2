//var portfolio_json             = require('../../data/portfolioData.json');
import {algoliasearch }           from 'algoliasearch'
import algoliasearchHelper      from 'algoliasearch-helper'

export class SearchModel {

    /* @ngInject */
    constructor(Network, GLOBALS, $q, Auth, algolia) {
        this.Network = Network;
        this.ModelPaginationPointer = 0;
        this.GLOBALS = GLOBALS;

        this.$q = $q;
        this.Auth = Auth;
        this.algolia = algolia;


        this.client = this.algolia.Client('2K1ULUZLUW', '16f42d05d731eaf17e018a0442ff1fb2');
        this.index = this.client.initIndex('group');

        // Paths


        this.searchResult = {};
    }


    setModel(value) {
        this.searchResult = value;
        this.ModelPaginationPointer = 0;

    }

    getModelValue() {
        return this.searchResult;
    }

    getModelPagination() {
        let SeaerchResult = [];
        let index = 0;
        for (var i = ModelPaginationPointer; i < this.GLOBALS.SeaechResultAmount; i++) {
            this.searchResult[index] = this.searchResult[i];
            ModelPaginationPointer++
            index++;
        }


    }

    get(query) {
        return this.index.search(query).
            then((content,err ) => {
                const searchresult_data = content;
                angular.copy(content, this.searchResult);
                return searchresult_data;
            });
    }

}
