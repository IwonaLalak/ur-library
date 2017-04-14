'use strict';
angular
    .module('libraryApp')
    .service('userService', userService);

function userService($http, $q,TokenStorage) {
    var vm = this;

    vm.getVisitedUser = function(id){
        return $q(function (resolve, reject) {
            $http.get("/api/users/"+id,
                {
                    "X-AUTH-TOKEN": TokenStorage.retrieve()
                }
            ).success(function (data) {
                resolve(data);

            }).error(function (err) {
                reject("error");

            })
        })
    };
/*    vm.getUsersBooksReaded = function(userid){
        return $q(function (resolve, reject) {
            $http.get("/api/usersBooks/"+userid+"/status",
                {
                    read:false,
                    "X-AUTH-TOKEN": TokenStorage.retrieve()
                }
            ).success(function (data) {
                resolve(data);

            }).error(function () {
                reject("error");

            })
        })
    };*/

    vm.getAllUserBooks = function(id){
        return $q(function (resolve, reject) {
            $http.get("/api/usersBooks/"+id,
                {
                    id:id
                },
                {
                    "X-AUTH-TOKEN": TokenStorage.retrieve()
                }
            ).success(function (data) {
                resolve(data);

            }).error(function (err) {
                reject("error");

            })
        })
    };
};