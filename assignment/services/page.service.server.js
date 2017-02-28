module.exports = function (app) {
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);


    var pages = [
        {_id: "321", name: "Post 1", title: "Title", websiteId: "456", description: "Lorem"},
        {_id: "432", name: "Post 2", title: "Title", websiteId: "456", description: "Lorem"},
        {_id: "543", name: "Post 3", title: "Title", websiteId: "456", description: "Lorem"}
    ];
    
    
    function createPage(req, res) {
        var newPage = req.params['websiteId'];
        newPage._id = pages.size; 
        pages.push(newPage); 
        res.json(newPage); 
    }
    
    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params['websiteId']; 

        var pgs = [];
        for (var p in pages) {
            if (websiteId === pages[p].developerId) {
                pgs.push(pages[p]);
            }
        }
        res.json(pgs); 
    }
    
    function findPageById(req, res) {
        var pageId = req.params['pageId']; 
        for (var p in pages) {
            var page = pages[p]; 
            if (page._id === pageId) {
                res.send(page); 
                return; 
            }
        }
        res.sendStatus(404).send({}); 
    }
    
    function updatePage(req, res) {
        var pageId = req.params['pageId']; 
        var newPage = req.body; 
        for (var p in pages) {
            var page = pages[p]; 
            if (page._id === pageId) {
                <!-- FIXME why not just page.name = newPage.name?  --> 
                pages[p].name = newPage.name; 
                pages[p].title = newPage.title; 
                pages[p].description = newPage.description; 
                res.sendStatus(200); 
                return; 
            }
        }
    }
    
    function deletePage(req, res) {
        var pageId = req.params['pageId']; 
        for (var p in pages) {
            if(pages[p]._id == pageId) {
                pages.splice(p, 1); 
                res.sendStatus(200); 
                return; 
            }
        }
        res.sendStatus(404).send({}); 
    }


};