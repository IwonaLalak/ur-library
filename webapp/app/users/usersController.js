(function() {

    'use strict';
    angular
        .module('libraryApp')
        .controller('usersController', usersController);

    function usersController(usersService,userService) {
        var vm = this;

        vm.getAllUsers = function(){
            usersService.getAllUsers().then(function (data) {
                vm.users = data;

            })
        };
        vm.getAllUsers();

    }


})();
