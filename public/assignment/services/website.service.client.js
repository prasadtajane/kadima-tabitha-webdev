(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);

    function WebsiteService($http) {
        var api = {
            "createWebsite" : createWebsite,
            "findAllWebsitesForUser": findAllWebsitesForUser,
            "findWebsiteById" : findWebsiteById,
            "updateWebsite" : updateWebsite,
            "deleteWebsite" : deleteWebsite
        };
        return api;

        function createWebsite(userId) {
            return $http.post("/api/user/"+userId +"/website");
        }

        function findAllWebsitesForUser (userId) {
            return http.get("/api/user/" + userId +"/website");
        }

        function findWebsiteById(websiteId) {
            return http.get("/api/website/"+websiteId);
        }

        function updateWebsite(websiteId, newWebsite) {
            return $http.put("/api/website/" + websiteId, newWebsite);
        }


        function deleteWebsite(websiteId, newWebsite) {
            return $http.delete("/api/website/"+websiteId, newWebsite);
        }

    }


})();