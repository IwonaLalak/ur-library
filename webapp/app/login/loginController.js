/**
 * Created by iwona on 25.11.16.
 */
'use strict';

angular
    .module('libraryApp')
    .controller('loginController',loginController);

    function loginController ($http,TokenStorage,$location){
        var vm = this;
        vm.verify_entered_data = function (login,password){
            $http.post('/api/login', {
                username: login,
                password: password
            }).success(function (result, status, headers) {
              //  $scope.authenticated = true;
                TokenStorage.store(headers('X-AUTH-TOKEN'));
                vm.token = JSON.parse(atob(TokenStorage.retrieve().split('.')[0]));
               // UserService.setLoggedUser($scope.token);
                $location.path("/");
            }).error(function(){
                vm.login_error = true;
            });
        }
    }