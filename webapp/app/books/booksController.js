(function() {

'use strict';
    angular
        .module('libraryApp')
        .controller('booksController', booksController);

    var number_of_pages=1;
    function booksController(booksService) {
        var vm = this;
        vm.total_pages = 0;
        function refreshBooks(page) {
            var elements = 10; // na stałe
            booksService.getBooks(page,elements).then(function (data) {
                vm.books = data.content;
                vm.total_pages = data.totalPages;
            })
        };
        vm.page_increment = function (){

            if(number_of_pages<=vm.total_pages){
                number_of_pages++;
                refreshBooks(number_of_pages);
            }
        };
        vm.page_decrement = function(){
            if(number_of_pages>=vm.total_pages){
                number_of_pages--;
                refreshBooks(number_of_pages);
            }
        };

        refreshBooks(number_of_pages);

        vm.reservedBook = function(id){
            booksService.reservedBook(id).then(function (data) {
                refreshBooks(number_of_pages);
            });

        };
/*
        vm.UserBooks = function (){
            console.log('aafkkjjsk');
            booksService.getUsersBooks().then(function (data) {
                console.log(data);
                console.log("wiiiii");
            })
        };*/
    }


})();
