const register = (req, res) => {
    //register api logic here
};

const follow = (req, res) => {
    //follow api logic here
};

const getFollowers = (req, res) => {
    //getFollowers api logic here
};

const getUserStats = (req, res) => {
    //getUserStats api logic here
};

const searchUsers = (req, res) => {
    //searchUsers api logic here
};

const getTweetsForUser = (req, res) => {
    //get all tweets for a user api logic here
};

const UserController = {
    register,
    follow,
    getFollowers,
    getUserStats,
    searchUsers,
    getTweetsForUser
};

module.exports = UserController;