(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    function UserService() {
        var users = [
            {
                _id: "123", username: "alice", password: "alice",
                "firstName": "Alice", lastName: "Wonder", email: "alice@wonderland.com"
            },
            {
                _id: "234", username: "bob", password: "bob",
                "firstName": "Bob", lastName: "Marley", email: "bmarley@hotmail.com"
            },
            {
                _id: "345", username: "charly", password: "charly",
                "firstName": "Charly", lastName: "Garcia", email: "cgarcia@neu.edu"
            },
            {
                _id: "456", username: "jannunzi", password: "jannunzi",
                "firstName": "Jose", lastName: "Annunzi", email: "jannunzi@neu.edu"
            }
        ];
        var api = {
            "createUser": createUser,
            "findUserById": findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials": findUserByCredentials,
            "updateUser": updateUser,
            "deleteUser": deleteUser
        };
        return api;
        
        function createUser(user) {
            for(var i = 0; i < users.length; i++) {
                if(users[i].username == user.username) {
                    return null;
                }
            }
            var last_user_id = users[users.length - 1]._id + 1;
            last_user_id.toString();
            user["_id"] = last_user_id;
            users.push(user);


        }

        function findUserById(_id) {
            for (var u in users) {
                var user = users[u];
                if (user._id == _id)
                    return user;
            }
            return null;
        }


        function findUserByUsername(username) {
            for (var u in users) {
                var user = users[u];
                if (user.username == username)
                    return user;
            }
            return null;
        }


        function findUserByCredentials(username, password) {
            for (var u in users) {
                var user = users[u];
                if (user.username === username &&
                    user.password === password) {
                    return angular.copy(user);
                }
            }
            return null;
        }

        function updateUser(userId, newUser) {
            for(var u in users) {
                if( users[u]._id == userId ) {
                    users[u].firstName = newUser.firstName;
                    users[u].lastName = newUser.lastName;
                    return users[u];
                }
            }
            return null;
        }

        

        function deleteUser(_id) {
            for (var u in users) {
                var user = users[u];
                if (user._id == _id) {
                    users.splice(u, 1);
                }
            }
        }

    }
})
();