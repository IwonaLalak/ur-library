/**
 * Created by iwona on 25.11.16.
 */
'use strict';

angular
    .module('libraryApp')
    .controller('registerController',registerController);

function registerController (registerService){
    var vm = this;
    
    vm.register_entered_data = function (login,password){
        
        registerService.registerUser(login,password).then(
            function(data){
                    vm.register_success = true;
                    vm.register_error = false;
            }

        );
        if(vm.register_success != true){
            vm.register_error = true;
        };

    }
}