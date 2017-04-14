'use strict';
angular
    .module('libraryApp')
    .service('panelService', panelService);

function panelService($http, $q, TokenStorage) {
    var vm = this;
    vm.getAllWaitingBooks = function () {
        return $q(function (resolve, reject) {
            $http.get("/api/admin/books/status",
                {
                    status: "waiting"
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
    vm.getAllBooks = function () {
        return $q(function (resolve, reject) {
            $http.get("/api/books/"
            ).success(function (data) {
                resolve(data);

            }).error(function (err) {
                reject("error");

            })
        })
    };

    vm.changeStatus = function (id, status) {
        return $q(function (resolve, reject) {
            $http.put("/api/admin/books?bookId=" + id + "&status=" + status,
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

    vm.banUser = function (id) {
        return $q(function (resolve, reject) {
            $http.put("/api/admin/users/?id="+id+"&accountLocked=true",
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

    /*vm.unbanUser = function (id) {
        return $q(function (resolve, reject) {
            console.log(id);
            $http.put("/api/admin/users/?id="+id+"&accountLocked=false",
                {
                    "X-AUTH-TOKEN": TokenStorage.retrieve()
                }
            ).success(function (data) {
                console.log(data);
                resolve(data);

            }).error(function (err) {
                console.log(err);
                reject("error");

            })
        })
    };*/

    vm.giveBookBack = function (id) {
        return $q(function (resolve, reject) {
            $http.put("/api/admin/userBooks/?id="+id,
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