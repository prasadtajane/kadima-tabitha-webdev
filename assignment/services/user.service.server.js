module.exports = function (app) {
    app.post("/api/user", createUser);
    app.get("/api/user", findUser);
    app.get("/api/user/:userId", findUserById);
    app.put("/api/user/:userId", updateUser);
    app.delete("/api/user/:userId", deleteUser);
    
    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder", 
        email:"alice@wonderland.com"},
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley",
        email:"bmarley@hotmail.com"},
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia",
        email:"cgarcia@neu.edu"},
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi", 
        email: "jannunzi@neu.edu"}
    ];

    function deleteUser(req, res) {
        console.log("1");
        var userId = req.params.userId;
        for(var u in users) {
            if(users[u]._id === userId) {
                users.splice(u, 1);
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);
    }

    function createUser(req, res) {
        console.log("2");
        var newUser = req.body;
        newUser._id = (new Date()).getTime() + "";
        users.push(newUser);
        res.json(newUser);
    }

    function updateUser(req, res) {
        console.log("3");
        var userId = req.params['userId'];
        for(var u in users) {
            var user = users[u];
            if( user._id === userId ) {
                users[u].firstName = newUser.firstName;
                users[u].lastName = newUser.lastName;
                res.sendStatus(200);
                return;
            }
        }
        res.sendStatus(404);
    }

    function findUserById(req, res) {
        console.log("4");
        var userId = req.params['userId'];
        for(var u in users) {
            var user = users[u];
            if( user._id === userId ) {
                res.send(user);
                return;
            }
        }
        res.sendStatus(404);
    }



    function findUser(req, res) {
        console.log("5");
        console.log("finding user...");
        var username = req.query['username'];
        var password = req.query['password'];
        if(username && password) {
            findUserByCredentials(req, res);
        } else if(username) {
            findUserByUsername(req, res);
        }

    }


    function findUserByUsername(req, res) {
        console.log("6");
        var username = req.query['username'];
        var user = users.find(function(u){
            return u.username == username;
        });
        if(user) {
            res.send(user);
        } else {
            res.sendStatus(404).send('User not found for username: ' + username);
        }
    }

    function findUserByCredentials(req, res){
        console.log("7");
        console.log("Server trying to log in");
        var username = req.query['username'];
        var password = req.query['password'];
        var user = users.find(function(u){
            return u.username == username && u.password == password;
        });
        if(user) {
            res.send(user);
        } else {
            res.sendStatus(404).send('User not found for username: ' + username + ' and password: ' + password);
        }
    }
};