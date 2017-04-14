'use strict';
angular
    .module('libraryApp')
    .service('profileService', profileService);

function profileService($http, $q, TokenStorage) {
    var vm = this;
    vm.getCurrentUser = function () {
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

    /*    vm.getUsersBooksNowReaded = function(userid){
     return $q(function (resolve, reject) {
     $http.get("/api/usersBooks/"+userid+"/status",
     {

     "X-AUTH-TOKEN": TokenStorage.retrieve()
     }
     ).success(function (data) {
     resolve(data);

     }).error(function () {
     reject("error");

     })
     })
     };*/

    vm.getUsersBooksNowReaded = function (name,id) {
        return $q(function (resolve, reject) {
            $http.get("/api/usersBooks/"+id+"/status?read=false",
                {
                    user: {
                        username: name
                    }

                },
                {
                    read: false
                },
                {
                    "X-AUTH-TOKEN": TokenStorage.retrieve()
                }
            ).success(function (data) {
                resolve(data);

            }).error(function () {
                reject("error");

            })
        })
    };

    /* vm.getAllUserBooks = function(name){
     return $q(function (resolve, reject) {
     $http.get("/api/usersBooks/",
     {
     user:{
     username:name
     }

     },
     {
     read:true
     },
     {
     "X-AUTH-TOKEN": TokenStorage.retrieve()
     }
     ).success(function (data) {
     resolve(data);

     }).error(function () {
     reject("error");

     })
     })
     };*/

    vm.getAllUserBooks = function (userid) {
        return $q(function (resolve, reject) {
            $http.get("/api/usersBooks/" + userid +"/status?read=true",
                {
                    "X-AUTH-TOKEN": TokenStorage.retrieve()
                }
            ).success(function (data) {
                resolve(data);

            }).error(function () {
                reject("error");

            })
        })
    };

    vm.changePassword = function (id, pass, name) {
        return $q(function (resolve, reject) {
            $http.put("/api/users/" + id,
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
    };


};