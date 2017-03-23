(function () {
    angular
        .module("wamDirectives", [])
        .directive("wamSortable", wamSortable);

    function wamSortable() {
        function linker(scope, element, attributes) {
            var startIndex = -1;
            var endIndex  = -1;

            element
                .wamSortable({
                    axis: 'y',
                    start: function(event, ui){
                        startIndex = $(ui.item).index();
                    },
                    stop: function(event, ui) {
                        endIndex = $(ui.item).index();

                        scope.sortableController.sort(start, end);
                    }

                });
        }

        function sortableController(WidgetService) {
            var vm = this;
            vm.sort = sort;

            function sort(first, last) {
                WidgetService.sort(first, last);
            }
        }


        return {
            scope: {},
            link: linker,
            controller: sortableController,
            controllerAs: "sortableController"
        }
    }


})();