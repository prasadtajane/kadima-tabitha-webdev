(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);

    function WidgetService($http) {
        var api = {
            "createWidget" : createWidget,
            "findAllWidgetsForPage": findAllWidgetsForPage,
            "findWidgetById" : findWidgetById,
            "updateWidget" : updateWidget,
            "deleteWidget" : deleteWidget
        };
        return api;

        function createWidget(pageId) {
            return $http.post("/api/page/" +pageId +"/widget");
        }

        function findAllWidgetsForPage (pageId) {
            return $http.get("/api/page/" + pageId +"/widget");
        }

        function findWidgetById(widgetId) {
            return $http.get("/api/widget/"+widgetId);
        }

        function updateWidget(widgetId, newWidget) {
            return $http.put("/api/widget" + widgetId, newWidget);
        }


        function deleteWidget(widgetId,  newWidget) {
            return $http.delete("/api/page"+widgetId, newWidget);
        }

    }


})();