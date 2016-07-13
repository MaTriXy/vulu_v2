import {algoliasearch }           from 'algoliasearch'
import algoliasearchHelper      from 'algoliasearch-helper'

export class Search {

    /* @ngInject */
    constructor($q, Auth, algolia) {
        this.$q = $q;
        this.Auth = Auth;
        this.algolia = algolia;


        this.client = this.algolia.Client('2K1ULUZLUW', '16f42d05d731eaf17e018a0442ff1fb2');
        this.index = this.client.initIndex('group');

        //todo - delete this
        this.getSearchResult();
    }


    getSearchResult(query) {
        this.index.search(query, function searchDone(err, content) {
            let searchresult = {};
            searchresult.err = err;
            searchresult.content = content;
            console.log(err, content);

            return searchresult;
        });
    }

}
