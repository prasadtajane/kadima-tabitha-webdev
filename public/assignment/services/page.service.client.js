(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);

    function PageService($http) {
        var api = {
            "createPage" : createPage,
            "findAllPagesForWebsite": findAllPagesForWebsite,
            "findPageById" : findPageById,
            "updatePage" : updatePage,
            "deletePage" : deletePage
        };
        return api;

        function createPage(websiteId) {
            return $http.post("/api/website/" +websiteId +"/page");
        }

        function findAllPagesForWebsite (websiteId) {
            return $http.get("/api/website/" + websiteId +"/page");
        }

        function findPageById(pageId) {
            return $http.get("/api/page/"+pageId);
        }

        function updatePage(pageId, newPage) {
            return $http.put("/api/page" + pageId, newPage);
        }


        function deletePage(pageId, newPage) {
            return $http.delete("/api/page"+pageId, newPage);
        }

    }


})();