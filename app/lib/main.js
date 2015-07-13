'use strict';

/**
 * Enable dubug mode
 * This allow to console.log in a firefox default configuration
 */
// require('sdk/preferences/service').set('extensions.sdk.console.logLevel', 'debug');

var data = require('sdk/self').data;
var { PageMod } = require('sdk/page-mod');

// Create a content script
var pageMod = PageMod({
    include: ['*'], // all urls
    contentScriptFile: [
        data.url('jquery.js'),
        data.url('contentscript.js')
    ]
});

