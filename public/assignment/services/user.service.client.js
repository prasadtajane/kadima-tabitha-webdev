(function () {
    angular
        .module("WebAppMaker")
        .factory("UserService", UserService);
    function UserService() {
        var users = [
            {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder"},
            {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley"},
            {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia"},
            {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose", lastName: "Annunzi"}
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
            var newUser = {
                _id: user._id,
                username: user.username,
                password: user.password,
                firstName: user.firstName,
                lastName: user.lastName
            };
            users.push(newUser);
        }

        function findUserById(id) {
            for (var i in users) {
                user = users[i];
                if (user._id === id) {
                    return user;
                }
            }
            return null;
        }

        function findUserByUsername(username) {
            for (var i in users) {
                user = users[i];
                if (user.username === username) {
                    return user;
                }
            }
            return null;
        }

        function findUserByCredentials(username, password) {
            for (var i in users) {
                user = users[i];
                if (user.username === username
                    && user.password === password) {
                    return user;
                }
            }
            return null;
        }

        function updateUser(userId, user) {
            var indexUser = users[userId];
            indexUser._id = user._id;
            indexUser.firstName = user.firstName;
            indexUser.password = user.password;
            indexUser.lastName = user.lastName;
        }

        function deleteUser(userId) {
            var indexUser = user[userId];
            users.splice(indexUser, 1);
        }
    }
})();