/**
 * Created by iwona on 25.11.16.
 */

'use strict';
angular
    .module('libraryApp')
    .service('booksService', booksService);

function booksService($http, $q,TokenStorage) {
    var vm = this;
    vm.getBooks = function (page,elements) {
        return $q(function (resolve, reject) {
            $http.get("/api/books/?page="+page+"&elements="+elements).success(function (data) {
                resolve(data);
            }).error(function () {
                reject("error");
            })
        })
    };
    vm.reservedBook = function(id){
        return $q(function(resolve, reject){
            $http.put("/api/usersBooks/?idBook="+id,
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
    /*vm.getUsersBooks = function(){
        return $q(function (resolve, reject) {
            $http.get("/api/usersBooks/").success(function (data) {
                console.log(data);
                console.log('aaaaa');
                resolve(data);

            }).error(function (err) {
                console.log(err);
                console.log('bbbbb');
                reject("error");

            })
        })
    };*/
};
