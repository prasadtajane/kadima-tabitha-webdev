(function () {
    angular
        .module("WebAppMaker")
        .factory("PageService", PageService);
    function PageService() {
        var pages =
            [
                { _id: "321", name: "Post 1", title : "Title", websiteId: "456", description: "Lorem" },
                { _id: "432", name: "Post 2", title : "Title", websiteId: "456", description: "Lorem" },
                { _id: "543", name: "Post 3", title : "Title", websiteId: "456", description: "Lorem" }
            ];
        var api = {
            "createPage" : createPage,
            "findPagesByWebsiteId" : findPagesByWebsiteId,
            "findPageById" : findPageById,
            "updatePage" : updatePage,
            "deletePage" : deletePage
        };
        return api;
        function createPage(websiteId, page){
            var newPage = {
                _id :  websiteId,
                name:  page.name,
                title: page.title,
                websiteId: websiteId,
                description: page.description

            };
            pages.push(newPage);
        }

        function findPagesByWebsiteId(websiteId) {
            var pgs = [];
            for (var i in pages) {
                if(websiteId === pages[i].websiteId) {
                    pgs.push(pages[i]); 
                }
            }
            return pgs;
        }

        function findPageById(pageId) {
            for (var i in pages) {
                page = pages[i];
                if (page._id === pageId) {
                    return page;
                }
            }
            return null;
        }

        function updatePage(pageId, page) {
            var indexPage = pages[pageId];
            indexPage._id = pageId
            indexPage.name = page.name;
            indexPage.websiteId = page.websiteId;
            indexPage.description = page.description;
        }

        function deletePage(pageId)  {
            var indexPage = pages[pageId];
            pages.splice(indexPage, 1);
        }
    }
})();