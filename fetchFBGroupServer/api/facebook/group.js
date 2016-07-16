var FB = require('fb');

var resposne;
var DbObj = {};
var question = {};
var http = require("http");
var https = require("https");
var likesList = [];
var AnswerList = [];
var PostList = [];
var db = [];
var dbArray = [];
var fbCommnetsPaginationAmount = 25;
var postListAmount = 24;
var $ = require('jQuery');
var accessToken;
var firebase_api = require('../firebase/firebase_api');

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
        if (!response || response.error) {
            console.log(!response ? 'error occurred' : response.error);
            return;
        }

        getAllGroupPost(response);

        db = parseGroup(PostList);

        firebase_api.save2db(db);

    });

});

function getAllGroupPost(groupObj) {

    if (PostList.length > postListAmount){
        PostList = PostList.concat(groupObj.data);
        return PostList;
    }

    if (groupObj.data && groupObj.data.length > 0) {
        PostList = PostList.concat(groupObj.data);
    }

    if (!groupObj.paging.next) {
        return PostList;
    }

    else {
        var next = groupObj.paging.next;
        $.ajax({
            url: next,
            async: false
        }).done(function (response) {
            getAllGroupPost(response);
        }).fail(function (xhr) {
            console.log(!xhr ? 'error occurred' : xhr.error);
        });
    }
}



function parseGroup(response) {
    var obj;
    var dbObj;
    dbArray = [];

    for (key in response) {
        console.log(key);
        dbObj = {};
        obj = response[key];
        dbObj["question"] = parseQuestions(obj);
        dbObj["answers"] = obj.comments ? parseAnswers(obj.comments) : null;

        dbArray.push(dbObj);
    }
    return dbArray;
}

function parseQuestions(obj) {
    var QuestionObj = {};
    QuestionObj.date = obj.created_time || Date.now();
    QuestionObj.rating = calculateRating(obj);
    QuestionObj.id = obj.id;
    QuestionObj.personName = obj.from.name;
    QuestionObj.message = obj.message || " ";
    QuestionObj.url = obj.actions[0].link;
    return QuestionObj;
}

function parseAnswers(commentsObj) {
    AnswerList = [];
    var tempList = [];

    if (commentsObj.data.length < fbCommnetsPaginationAmount) {
         AnswerList = AnswerList.concat(commentsObj.data);
        return AnswerList;
    }

    else if (commentsObj.data.length === fbCommnetsPaginationAmount) {
        //we need to perform pagination
        tempList = getAllAnswers(commentsObj);
        if (tempList){
            AnswerList = AnswerList.concat(tempList);
        }
        return AnswerList;

    }
    function getAllAnswers(commentsObj) {
        AnswerList = AnswerList.concat(commentsObj.data);
        if (commentsObj.paging.next) {
            var next = commentsObj.paging.next;
            $.ajax({
                url: next,
                async: false
            }).done(function (response) {
                getAllAnswers(response);
            }).fail(function (xhr) {
                console.log(!xhr ? 'error occurred' : xhr.error);
            });
        } else {
            return AnswerList;
        }
    }
}

function calculateRating(groupObj) {
    likesList = [];

    if (!groupObj.likes) {
        return 0;
    }
    //no likes pagination
    if (!groupObj.likes.paging.next) {
        return groupObj.likes.data.length;
    }
    getAllLikes(groupObj.likes);
    return likesList.length;

    function getAllLikes(likesArray) {
        likesList = likesList.concat(likesArray.data);
        if (likesArray.paging.next) {
            var next = likesArray.paging.next;

            $.ajax({
                url: next,
                async: false
            }).done(function (response) {
                getAllLikes(response);
            }).fail(function (xhr) {
                console.log(!xhr ? 'error occurred' : xhr.error);
            });
        } else {
            return likesList;
        }
    }


}



