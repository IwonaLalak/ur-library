'use strict';
angular
    .module('libraryApp')
    .service('suggestService', suggestService);

function suggestService($http, $q,TokenStorage) {
    var vm = this;
    vm.addNewBook = function(isbn){
            return $q(function (resolve, reject) {
                $http.put("/api/books/"+isbn,
                    {
                        "X-AUTH-TOKEN": TokenStorage.retrieve()
                    }
                ).success(function (data) {
                    resolve(data);

                }).error(function (err) {
                    reject("error");

                })
            })
    }

};