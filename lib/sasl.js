'use strict';

var Plain = require('./authentication/plain'),
    DigestMD5 = require('./authentication/digestmd5'),
    XOAuth2 = require('./authentication/xoauth2')

/**
 * What's available for server-side authentication (C2S)
 */
function availableMechanisms(availableMech) {
    // default methods
    var mechanisms = [Plain]
    if (availableMech)
        mechanisms = mechanisms.concat(availableMech)
    return mechanisms
}

module.exports = {
	availableMechanisms : availableMechanisms,
	plain : Plain,
	digestmd5 : DigestMD5,
	xoauth2 : XOAuth2
}