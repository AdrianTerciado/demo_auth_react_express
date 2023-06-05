const User = require('./usersSchema');


const signup = async (email, password, role) => {

    try {
        const newUser = await User.create({ email, password, role });
        return newUser;

    } catch (error) {
        console.log(error.message);
        throw error
    };
};

const login = async (email, password) => {
    try {
        const userExists = await User.find({ email, password });
        console.log(userExists);
        return userExists;

    } catch (error) {
        console.log(error.message);
        throw error
    };
};

const getAllUsers = async () => {
    try {
        const users = await User.find({});
        console.log("USERS", users);
        return users

    } catch (error) {
        console.log(error.message);
        throw error;
    }
};

const userModels = {
    signup,
    login,
    getAllUsers
};


module.exports = userModels;