(function (){
    "use strict";

    angular.module('public')
    .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService', 'SignupService', 'ImageURLPath']
    function MyInfoController(MenuService, SignupService, ImageURLPath) {
        const myInfoCtrl = this;

        if(SignupService.user) {
            myInfoCtrl.user = SignupService.user;

            MenuService.getMenuItem(myInfoCtrl.user.menu[0].toUpperCase(), myInfoCtrl.user.menu.substring(1, myInfoCtrl.user.menu.length))
            .then(function (response) {
                myInfoCtrl.user.favdish = response;
                myInfoCtrl.user.favdish.image = `${ImageURLPath}/images/${response.short_name}.jpg`; 
            })
            .catch(function (error) {
                console.error(error);
            })
        }
    }
})();