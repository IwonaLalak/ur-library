'use strict';
angular
    .module('libraryApp')
    .service('usersService', usersService);

function usersService($http, $q,TokenStorage) {
    var vm = this;
    vm.getAllUsers = function(){
        return $q(function (resolve, reject) {
            $http.get("/api/users",
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
    /*vm.getCurrentUser = function(){
        return $q(function (resolve, reject) {
            $http.get("/api/users/current",
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

    vm.getUsersBooksReaded = function(userid){
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
    };

    vm.getAllUserBooks = function(){
        return $q(function (resolve, reject) {
            $http.get("/api/usersBooks/",
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
    };

    vm.changePassword = function(id,pass,name){
        console.log(TokenStorage.retrieve());
        return $q(function(resolve, reject){
            $http.put("/api/users/"+id,
                {
                    username: name,
                    password: pass
                },
                {
                    "X-AUTH-TOKEN": TokenStorage.retrieve()
                }


            ).success(function (data) {
                resolve(data);

            }).error(function (data) {
                reject(data);

            })
        })
    }*/
};