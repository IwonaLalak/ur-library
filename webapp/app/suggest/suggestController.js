/**
 * Created by iwona on 06.12.16.
 */
(function() {

    'use strict';
    angular
        .module('libraryApp')
        .controller('suggestController', suggestController);

    function suggestController(suggestService) {
        var vm = this;

        vm.addNewBook = function(isbn){

            suggestService.addNewBook(isbn).then(function (data) {
                vm.book = data;
                vm.added = true;
            });
            vm.clicked=true;
        }
        


    }


})();
