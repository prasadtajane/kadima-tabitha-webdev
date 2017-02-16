(function () {
    angular
        .module("WebAppMaker")
        .factory("WidgetService", WidgetService);
    function WidgetService() {
        var widgets =
            [
                {_id: "123", name: "Gizmodo", widgetType: "HEADER", pageId: "321", size: 2, text: "GIZMODO"},
                {_id: "234", widgetType: "HEADER", pageId: "321", size: 4, text: "Lorem ipsum"},
                {
                    _id: "345", name : "lorepixel", widgetType: "IMAGE", pageId: "321", width: "100%",
                    url: "http://lorempixel.com/400/200/"
                },
                {_id: "456", name : "Lorem", widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"},
                {_id: "567", widgetType: "HEADER", pageId: "321", size: 4, text: "Lorem ipsum"},
                {
                    _id: "678", name:"Youtube", widgetType: "YOUTUBE", pageId: "321", width: "100%",
                    url: "https://www.youtube.com/embed/AM2Ivdi9c4E"
                },
                {_id: "789", name : "html lorem",widgetType: "HTML", pageId: "321", text: "<p>Lorem ipsum</p>"}
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
            var wdgt = [];
            for (var i in widgets) {
                if (pageId === widgets[i].pageId) {
                    wdgt.push(widgets[i]);
                }
            }
            return wdgt;
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
            indexWidget._id = widgetId;
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