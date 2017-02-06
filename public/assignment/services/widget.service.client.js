(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    function WidgetService() {
        var widgets =
            [
                {"_id": "123", "widgetType": "HEADER", "pageId": "321", "size": 2, "text": "GIZMODO"},
                {"_id": "234", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                {
                    "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%",
                    "url": "http://lorempixel.com/400/200/"
                },
                {"_id": "456", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"},
                {"_id": "567", "widgetType": "HEADER", "pageId": "321", "size": 4, "text": "Lorem ipsum"},
                {
                    "_id": "678", "widgetType": "YOUTUBE", "pageId": "321", "width": "100%",
                    "url": "https://youtu.be/AM2Ivdi9c4E"
                },
                {"_id": "789", "widgetType": "HTML", "pageId": "321", "text": "<p>Lorem ipsum</p>"}
            ];
        var api = {
            "createWidget": createWidget,
            "findWidgetsByPageId": findWidgetsByPageId,
            "findWidgetById": findWidgetById,
            "updateWidget": updateWidget,
            "deleteWidget": deleteWidget
        };
        return api;
        function createWidget(pageId, widget) {
            var newWidget = {
                _id: widget._id,
                widgetType: widget.widgetType,
                pageId: pageId,
                size: widget.size,
                text: widget.text

            };
            widgets.push(newWidget);
        }

        function findWidgetsByPageId(pageId) {
            for (var i in widgets) {
                widget = widgets[i];
                if (widget.pageId === pageId) {
                    return widget;
                }
            }
            return null;
        }

        function findWidgetById(widgetId) {
            for (var i in widgets) {
                widget = widgets[i];
                if (widget._id === widgetId) {
                    return widget;
                }
            }
            return null;
        }

        function updateWidget(widgetId, widget) {
            var indexWidget = widgets[widgetId];
            indexWidget._id = widget._id;
            indexWidget.widgetType = widget.widgetType;
            indexWidget.pageId = widget.pageId;
            indexWidget.size = widget.size;
            indexWidget.text = widget.text;
        }

        function deleteWidget(widgetId) {
            var indexWidget = widgets[widgetId];
            widgets.splice(indexWidget, 1);
        }
    }
})();