(function() {

    'use strict';
    angular
        .module('libraryApp')
        .controller('profileController', profileController);

    function profileController(profileService) {
        var vm = this;

        vm.getUserIdAndName = function(){
            profileService.getCurrentUser().then(function (data) {
                vm.userid = data.id;
                vm.username = data.username;
                vm.getUsersBooksNowReaded(vm.username,vm.userid);
                vm.getAllUserBooks(vm.userid);

            })
        };
        vm.getUserIdAndName();

        vm.getUsersBooksNowReaded = function (name,id){
            profileService.getUsersBooksNowReaded(name,id).then(function (data) {
                vm.nowReadBooks = data;

            })
        };

        vm.getAllUserBooks = function(id){
            profileService.getAllUserBooks(id).then(function(data){
                vm.allBooks = data;
            })
        };


        vm.changePass = function(id,pass,name){
            profileService.changePassword(id,pass,name).then(function(data){
                alert('Zmieniono hasło');
            })
        };



    }


})();
