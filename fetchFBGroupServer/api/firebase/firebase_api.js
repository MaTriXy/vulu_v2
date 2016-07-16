var firebase = require('firebase');
var events = require("events");
var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();
var Q = require('q');
var token;
var currentJSONDB;
var firebaseSetPromise;

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
    firebaseSetPromise = firebase.database().ref('group' + new Date().getDay() + new Date().getMilliseconds()).set({
        "db": data
    });
}

function getDbJson(db) {
    /*    firebase.database().ref(db).on('value', function(snapshot) {
     currentJSONDB = snapshot.val();
     return currentJSONDB;
     });*/
    var deferred = Q.defer();

    firebase.database().ref(db).once('value').then(function (snapshot) {
        var dbObject = snapshot.val();
        ee.emit("reteriveDBobject");
        deferred.resolve(dbObject);
    });

    return deferred.promise;

}

// export the app for testing
module.exports = {"save2db": save2db, "token": token, "getDbJson": getDbJson, "firebaseSetPromise": firebaseSetPromise};