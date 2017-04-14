/**
 * Created by iwona on 25.11.16.
 */
angular
    .module('libraryApp')
    .service('registerService', registerService);

function registerService($http, $q) {
    var vm = this;

    vm.registerUser = function(username,password){
        return $q(function (resolve, reject) {
            $http.post("/register",{
                username: username,
                password: password
            }).success(function (data) {
                resolve(data);
            }).error(function () {
                reject("error");
            })
        })
    }
}