(function () {
    angular
        .module("BostonHealth")
        .controller("HomeController", HomeController);


    function HomeController($modal) {

        var vm = this;
        vm.showModal = showModal;

    }

})();