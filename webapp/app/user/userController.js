(function() {

    'use strict';
    angular
        .module('libraryApp')
        .controller('userController', userController);

    function userController(userService,$location) {
        var vm = this;
        var visited_user_id = null;
        var path = $location.path();

        if(path.length == 8){
            visited_user_id = path[6]+path[7];
            visited_user_id = parseInt(visited_user_id);
        }
        else if(path.length == 7){
            visited_user_id = path[6];
            visited_user_id = parseInt(visited_user_id);
        }

        vm.getVisitedUser = function(){
            userService.getVisitedUser(visited_user_id).then(function (data) {
                vm.username = data.username;
               // vm.getUsersBooksReaded(visited_user_id);
               // vm.getAllUserBooks(visited_user_id);
            })
        };
        vm.getVisitedUser();
        /*
        vm.getUsersBooksReaded = function (id){
            userService.getUsersBooksReaded(id).then(function (data) {
                vm.readedBooks = data;
            })
        };*/

        vm.getAllUserBooks = function(id){
            userService.getAllUserBooks(id).then(function(data){
                vm.allBooks = data;
            })
        };
        vm.getAllUserBooks(visited_user_id);

    }


})();
