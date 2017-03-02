
(function () {
    angular
        .module('wbdvDirectives', [])
        .directive('wbdvSortable', wbdvSortable);

    function wbdvSortable() {
        function linkFunction(scope, element, attributes, controller) {
            element.sortable({
                axis: 'y',
                handle:'.handle',

                start: function (event, ui) {
                    var initial_index = ui.item.index();
                    ui.item.data('initial_index', initial_index);
                },

                update: function (event, ui) {
                    var initial_index = ui.item.data('initial_index');
                    var final_index = ui.item.index();
                    controller.UpdateWidgetPosition(initial_index, final_index);
                }
            });
        }

        function SortingController($routeParams, widgetService) {
            var vm = this;
            vm.updateWidgetPosition = updateWidgetPosition;

            function updateWidgetPosition(startIndex, finalIndex) {
                var pageId = $routeParams['pid'];
                widgetService.UpdateWidgetPosition(startIndex, finalIndex, pageId);
            }
        }

        return {
            controller: SortingController,
            link: linkFunction
        };
    }
})();