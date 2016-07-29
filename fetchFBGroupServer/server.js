//3th party
var express = require('express');
var app = express();

var FB = require('fb');
var search = require('./api/algosearch/algoliasearch');
var fbGroup = require('./api/facebook/group')(app, {"getGroup" : true , "setDB" : false});
var deferred = require('deferred');

//local
//var api = require('./api/api');
var config = require('./config/config');
var logger = require('./util/logger');
//var auth = require('./auth/routes');



/*
//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//
prompt.get(['getGroup', 'SetSearch'], function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  username: ' + result.username);
    console.log('  email: ' + result.email);

});
*/

var getGroup = "yes";
var setSearch = "No";


//fbGroup.initFB(getGroup , setSearch);





//var search = require('./api/algosearch/algoliasearch');
//var fbGroup = require('./api/facebook/group');


var accessToken;






// db.url is different depending on NODE_ENV
//require('mongoose').connect(config.db.url);

/*if (config.seed) {
 require('./util/seed');
 }*/
// setup the app middlware
//require('./middleware/appMiddlware')(app);

// setup the api
//app.use('/api', api);
//app.use('/auth', auth);
// set up global error handling
/*
 app.use(function(err, req, res, next) {
 // if error thrown from jwt validation check
 if (err.name === 'UnauthorizedError') {
 res.status(401).send('Invalid token');
 return;
 }

 logger.error(err.stack);
 res.status(500).send('Oops');
 });*/

/*FB.init({
 appId      : '501986036514690',
 xfbml      : true,  // parse social plugins on this page
 version    : 'v2.2' // use version 2.2
 });*/

// Now that we've initialized the JavaScript SDK, we call
// FB.getLoginStatus().  This function gets the state of the
// person visiting this page and can return one of three states to
// the callback you provide.  They can be:
//
// 1. Logged into your app ('connected')
// 2. Logged into Facebook, but not your app ('not_authorized')
// 3. Not logged into Facebook and can't tell if they are logged into
//    your app or not.
//
// These three cases are handled in the callback function.

/*
 FB.getLoginStatus(function(response) {
 statusChangeCallback(response);
 });

 FB.login(function(response) {
 console.log('login: ' + response);
 }, {scope: 'email,user_likes , user_friends ,user_groups , user_managed_groups , email , public_profile ,user_likes'});
 */

/*
FB.api('oauth/access_token', {
    client_id: '501986036514690',
    client_secret: 'c0bd162a2462b06b0f144806a69eb19c',
    grant_type: 'client_credentials'
}, function (res) {
    if (!res || res.error) {
        console.log(!res ? 'error occurred' : res.error);
        return;
    }

    accessToken = res.access_token;

    FB.setAccessToken(accessToken);

    FB.api('434228236734415/feed', function (response) {
        if (!res || res.error) {
            console.log(!res ? 'error occurred' : res.error);
            return;
        }
        console.log('434228236734415/friends?fields=id,name' + response);
    });

});
*/


/*
 FB.api('https://graph.facebook.com/434228236734415/feed', function(response) {
 console.log('me/friends?fields=id,name' + response);
 });
 */



// export the app for testing
module.exports = app;
