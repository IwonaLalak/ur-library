/**
 * Created by iwona on 03.12.16.
 */
angular
    .module('libraryApp')
    .factory('TokenStorage', function() {
    var storageKey = 'auth_token';
    return {
        store : function(token) {
            return localStorage.setItem(storageKey, token);
        },
        retrieve : function() {
            return localStorage.getItem(storageKey);
        },
        clear : function() {
            return localStorage.removeItem(storageKey);
        }
    };
});