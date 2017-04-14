/*
/!**
 * Created by iwona on 25.11.16.
 *!/
angular
    .module('libraryApp')
    .service('loginService', loginService);

function loginService($http, $q) {
    var vm = this;

    vm.logIn = function(username,password){
        return $q(function (resolve, reject) {
            $http.post("/api/login",{
                username: username,
                password: password
            }).success(function (data, status, headers, config) {
                    /!*$sessionStorage.token = data.token;
                console.log(data.token);
                    console.log('Welcome');*!/
                resolve(data,headers);
                })
                .error(function (data, status, headers, config) {
                    // Erase the token if the user fails to log in
                    //delete $sessionStorage.token;

                    // Handle login errors here
                    console.log('Error');
                });
        })
    }
}*/
