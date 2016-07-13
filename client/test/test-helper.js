'use strict';

require('angular/angular');
require('angular-mocks');

window.beforeEach = global.beforeEach;
window.afterEach = global.afterEach;

global.angular = window.angular;

global._ = window._ = require('lodash');
global.jQuery = window.jQuery = require('jquery');

global.$ = window.$ = global.jQuery;

require('ngStorage');
require('angular-signalr-hub');


let globals = require('../config/globals');
globals.__API_URL = JSON.parse(globals.__API_URL);


_.extend(window, globals);
_.extend(global, globals);

module.exports = {
    inject: window.angular.mock.inject,
    module: window.angular.mock.module,
    dump: window.angular.mock.dump
};

