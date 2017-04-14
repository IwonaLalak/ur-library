angular.module('libraryApp', [
        'ngRoute',
       // 'ngStorage',
       // 'tokenStorage',
       // 'angular.filter',
        'libraryApp.libraryNavbar',
        'libraryApp.libraryFooter'


    ])

    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/home/home.html"
            })
            .when("/login", {
                templateUrl: "app/login/login.html",
                controller: "loginController",
                controllerAs: "vm"
            })
            .when("/register", {
                templateUrl: "app/register/register.html",
                controller: "registerController",
                controllerAs: "vm"
            })
            .when("/books", {
                templateUrl: "app/books/books.html",
                controller: "booksController",
                controllerAs: "vm"
            })
            .when("/profile", {
                templateUrl: "app/profile/profile.html",
                controller: "profileController",
                controllerAs: "vm"
            })
            .when("/panel", {
                templateUrl: "app/panel/panel.html",
                controller: "panelController",
                controllerAs: "vm"
            })
            .when("/users", {
                templateUrl: "app/users/users.html",
                controller: "usersController",
                controllerAs: "vm"
            })
            .when("/user/:id", {
                templateUrl: "app/user/user.html",
                controller: "userController",
                controllerAs: "vm"
            })
            .when("/suggest", {
                templateUrl: "app/suggest/suggest.html",
                controller: "suggestController",
                controllerAs: "vm"
            })


    });


