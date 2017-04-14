angular.module('libraryApp.libraryFooter',[]);
angular.module('libraryApp.libraryFooter',[])
    .directive('libraryFooter',function () {
    return{
        restrict: 'AEC',
        templateUrl: 'app/footer/footer.html'
    }
});
