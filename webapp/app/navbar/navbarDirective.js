/**
 * Created by iwona on 28.10.16.
 */
angular.module('libraryApp.libraryNavbar', []);
angular.module('libraryApp.libraryNavbar', [])
    .directive('libraryNavbar', function () {
        return {
            restrict: 'AEC',
            templateUrl: 'app/navbar/navbar.html'
        }
    })
    .controller('libraryNav', function ($scope, TokenStorage, $location, profileService) {
        $scope.check_if_user_is_logged = function () {
            $scope.user_logged = false;
            if (TokenStorage.retrieve() != undefined) {
                $scope.user_logged = true;
            }
        };
        $scope.check_if_user_is_logged();

        $scope.logout = function () {
            if (TokenStorage.retrieve() != undefined) {
                TokenStorage.clear();
                $scope.user_logged = false;
                $scope.currentUser = "";
                $location.path("/");
            }

        };
        $scope.currentUser = "";

        $scope.admin = function () {
            profileService.getCurrentUser().then(function (data) {
                if (data.username == "admin") {
                    $scope.currentUser = data.username;
                    return data.username;
                }
            });

        };
        $scope.admin();
    });



