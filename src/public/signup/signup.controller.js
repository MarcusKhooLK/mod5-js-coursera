(function () {
    "use strict";

    angular.module('public')
    .controller('SignupController', SignupController);

    SignupController.$inject = ['MenuService', 'SignupService']
    function SignupController(MenuService, SignupService) {
        const signUpCtrl = this;

        signUpCtrl.submitSignup = function() {
            console.log("Submit");

            console.log(signUpCtrl)
            
            let menuItemStr = signUpCtrl.user.menu;
            
            if(menuItemStr.length < 2) {
                signUpCtrl.message = "No such menu number exists";
                return;
            }
            
            MenuService.getMenuItem(menuItemStr[0].toUpperCase(), menuItemStr.substring(1, menuItemStr.length))
            .then(function (response) {
                if(response == null) {
                    signUpCtrl.message = "No such menu number exists";
                } else {
                    SignupService.user = signUpCtrl.user;
                    signUpCtrl.message = "Your information has been saved";
                }
            })
            .catch(function (error) {
                console.error(error);
            })
        }
    }

})();