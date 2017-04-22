(function () {
    angular
        .module("BostonHealth")
        .controller("SearchController", SearchController);


    function SearchController(SearchService) {

        var vm = this;
        vm.searchDoctors = searchDoctors;

        function init() {
            console.log("initializing search");
            var promise = SearchService.findAllBostonDoctors();
            promise.success(function (response) {
                vm.doctors = response.data;
            })

        }

        init();

        function searchDoctors(docName) {
            SearchService
                .findDoctorByName(docName)
                .then(function (response) {
                    vm.doctors = response.data.results;
                    console.log(vm.doctors);
                }, function (err) {
                    vm.error = err;
                });
        }
    }
})();