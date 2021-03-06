(function () {
    angular
        .module("BostonHealth")
        .factory("UserService", UserService);

    function UserService($http) {
        var api = {
            "createUser" : createUser,
            "findUserById" : findUserById,
            "findUserByUsername": findUserByUsername,
            "findUserByCredentials" : findUserByCredentials,
            "updateUser" : updateUser,
            "deleteUser" : deleteUser,
            "addSchool" : addSchool
        };

        return api;

        function createUser(user) {
            return $http.post("/api/user", user);
        }

        function findUserById(userId) {
            return $http.get("/api/user/" + userId);
        }

        function findUserByUsername(username) {
            return $http.get("/api/user?username=" + username);
        }

        function findUserByCredentials(username, password) {
            return $http.get("/api/user?username=" + username + "&password=" + password);

        }

        function updateUser(userId, newUser) {
            return $http.put("/api/user/" + userId, newUser);
        }

        function deleteUser(userId) {
            return $http.delete("/api/user/" + userId)
        }

        function addSchool(userId, schoolId) {
            return $http.put("/api/user/"+ userId +"/school/"+ schoolId);
        }




    }
})();