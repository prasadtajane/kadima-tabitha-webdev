(function () {
    angular
        .module("BostonHealth")
        .controller("SearchController", SearchController);


    function SearchController(SearchService) {

        var vm = this;
        vm.selectedDoctor;
        vm.searchDoctors = searchDoctors ;

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
                    data = JSON.parse(data);
                    console.log(data);
                })
        }
    }
})();