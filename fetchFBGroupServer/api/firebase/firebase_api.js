//every run we create new firebase DB.

var firebase = require('firebase');
var events = require("events");
var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();
var Q = require('q');
var token;
var currentJSONDB;
var firebaseSetPromise;
var dbName = 'groupFinal' + new Date().getDay() + new Date().getMilliseconds();

initFirebase();

function initFirebase() {
    var config = {
        apiKey: "AIzaSyDIkFnHkvgxoDmlM1oAAnjWfvsdvDDUJj8",
        authDomain: "startupsknowelgedb.firebaseapp.com",
        databaseURL: "https://startupsknowelgedb.firebaseio.com",
        storageBucket: "",
    };
    firebase.initializeApp(config);

    var FirebaseTokenGenerator = require("firebase-token-generator");
    var tokenGenerator = new FirebaseTokenGenerator("<your-firebase-secret>");
    token = tokenGenerator.createToken(
        {uid: "startupknowelgedb"});
}

function save2db(data) {
    var deferred = Q.defer();

    firebase.database().ref('group111' + new Date().getDay() + new Date().getMilliseconds()).set({
        "db": data
    });
    return deferred.promise;
}

function getDbJson() {
    /*    firebase.database().ref(db).on('value', function(snapshot) {
     currentJSONDB = snapshot.val();
     return currentJSONDB;
     });*/
    var deferred = Q.defer();

    firebase.database().ref(dbName).once('value').then(function (snapshot) {
        var dbObject = snapshot.val();
        ee.emit("reteriveDBobject");
        deferred.resolve(dbObject);
    });

    return deferred.promise;

}

// export the app for testing
module.exports = {"save2db": save2db, "token": token, "getDbJson": getDbJson, "firebaseSetPromise": firebaseSetPromise};