cordova.define("cordova-plugin-firebase-authentication.FirebaseAuthentication", function(require, exports, module) {
var exec = require("cordova/exec");
var PLUGIN_NAME = "FirebaseAuthentication";

module.exports = {
    getIdToken: function(forceRefresh) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "getIdToken", [forceRefresh]);
        });
    },
    signInWithEmailAndPassword: function(email, password) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "signInWithEmailAndPassword", [email, password]);
        });
    },
    signInWithGoogle: function(idToken, accessToken) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "signInWithGoogle", [idToken, accessToken]);
        });
    },
    signInWithFacebook: function(accessToken) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "signInWithFacebook", [accessToken]);
        });
    },
    signInWithTwitter: function(token, secret) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "signInWithTwitter", [token, secret]);
        });
    },
    verifyPhoneNumber: function(phoneNumber, timeoutMillis) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "verifyPhoneNumber", [phoneNumber, timeoutMillis]);
        });
    },
    signInWithVerificationId: function(verificationId, code) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "signInWithVerificationId", [verificationId, code]);
        });
    },
    signOut: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "signOut", []);
        });
    },
    setLanguageCode: function(languageCode) {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setLanguageCode", [languageCode]);
        });
    },
    useAppLanguage: function() {
        return new Promise(function(resolve, reject) {
            exec(resolve, reject, PLUGIN_NAME, "setLanguageCode", [null]);
        });
    },
    onAuthStateChanged: function(callback) {
        exec(callback, null, PLUGIN_NAME, "onAuthStateChanged", [false]);

        return function() {
            exec(null, null, PLUGIN_NAME, "onAuthStateChanged", [true]);
        };
    }
};

});
