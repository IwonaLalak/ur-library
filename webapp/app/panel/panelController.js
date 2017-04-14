/**
 * Created by iwona on 06.12.16.
 */
(function () {

    'use strict';
    angular
        .module('libraryApp')
        .controller('panelController', panelController);

    function panelController(panelService) {
        var vm = this;

        vm.getAllBooks = function () {
            panelService.getAllBooks().then(function (data) {
                vm.allBooks = data.content;
            })
        };
        vm.getAllBooks();

        vm.getAllWaitingBooks = function () {
            panelService.getAllWaitingBooks().then(function (data) {
                vm.waitingBooks = data;
            })

        };
        vm.getAllWaitingBooks();

        vm.acceptUserSuggest = function (id) {
            panelService.changeStatus(id, "accepted").then(function (data) {
                vm.getAllBooks();
                vm.getAllWaitingBooks();
            })
        };

        vm.rejectUserSuggest = function (id) {
            panelService.changeStatus(id, "nonAccepted").then(function (data) {
                vm.getAllBooks();
                vm.getAllWaitingBooks();
            })
        };

        vm.changeBookStatus = function (id,status) {
            panelService.changeStatus(id, status).then(function (data) {
                vm.getAllBooks();
                vm.getAllWaitingBooks();
            })
        };

        vm.banUser = function (id){
            panelService.banUser(id).then(function (data) {

                alert("Zbanowano użytkownika "+data.username);
            })
        };
        
        /*vm.unbanUser = function (id){
            panelService.unbanUser(id).then(function (data) {
                alert("Odbanowano użytkownika "+data.username);
            })
        }*/

        vm.giveBookBack = function (id){
            panelService.giveBookBack(id).then(function (data) {
                vm.getAllBooks();
            })
        }

    }
})();
