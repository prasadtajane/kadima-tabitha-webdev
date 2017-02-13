(function () {
    angular
        .module("WebAppMaker")
        .factory("WebsiteService", WebsiteService);
    function WebsiteService() {
        var websites =
            [
                {"_id": "123", "name": "Facebook", "developerId": "456", "description": "Lorem"},
                {"_id": "234", "name": "Tweeter", "developerId": "456", "description": "Lorem"},
                {"_id": "456", "name": "Gizmodo", "developerId": "456", "description": "Lorem"},
                {"_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem"},
                {"_id": "678", "name": "Checkers", "developerId": "123", "description": "Lorem"},
                {"_id": "789", "name": "Chess", "developerId": "234", "description": "Lorem"}
            ];
        var api = {
            "createWebsite" : createWebsite,
            "findWebsitesByUser" : findWebsitesByUser,
            "findWebsiteById" : findWebsiteById,
            "updateWebsite" : updateWebsite,
            "deleteWebsite" : deleteWebsite
        };
        return api; 
        function createWebsite(userId, website){
            var newWebsite = {
                _id : userId,
                name: website.name,
                developerId : userId,
                description : website.description
            };
            websites.push(newWebsite);
        }

        function findWebsitesByUser(userId) {
            for (var i in websites) {
                website = websites[i];
                if (website.developerId === userId) {
                    return website;
                }
            }
            return null;
        }

        function findWebsiteById(websiteId) {
            for (var i in websites) {
                website = websites[i];
                if (website._id === websiteId) {
                    return website;
                }
            }
            return null;
        }

        function updateWebsite(websiteId, website) {
            var indexWebsite = websites[websiteId];
            indexWebsite.name = website.name;
            indexWebsite.developerId = website.developerId;
            indexWebsite.description = website.description;
        }

        function deleteWebsite(websiteId)  {
            var indexWebsite = websites[websiteId];
            websites.splice(indexWebsite, 1);
        }
    }
})(); 