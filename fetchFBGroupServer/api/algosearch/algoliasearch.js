var algoliasearch = require('algoliasearch');
var client = algoliasearch('2K1ULUZLUW', '16f42d05d731eaf17e018a0442ff1fb2');
var events = require("events");
var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();
var currentJSONDB;


var firebase_api = require('../firebase/firebase_api')


firebase_api.getDbJson("group/db").then(function (resposne) {
    updateIndex(resposne);
});

ee.on("reteriveDBobject", function () {
    console.log("event reteriveDBobject has occured");
});


function updateIndex(data) {
    var index = client.initIndex('group');
    var data = data;

    var d = index.addObjects(data, function (err, content) {
        if (err) {
            console.error(err);
        }
        else {
            console.log("algolia update" + d);
        }
    });
}