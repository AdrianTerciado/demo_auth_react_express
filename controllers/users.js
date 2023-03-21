const usersModels = require('../models/users');
const { createToken } = require('../config/jsonWebToken');


const signup = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        const newUser = await usersModels.signup(email, password, role)
        res.status(201).json({ msg: "Signed Up" });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};



const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await usersModels.login(email, password);
        console.log(user);
        if (user.length > 0) {
            const token = createToken({ email });
            res.status(200)
                .set('Authorization', `Bearer ${token}`)
                .cookie('access_token', token)
                .send();
        } else {
            res.status(400).json({ msg: "wrong credentials" });
        }

    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};

const logout = async (req, res) => {
    try {
        res.status(200)
            .set('Authorization', "")
            .cookie('access_token', "")
            .send();
    } catch (error) {
        res.status(400).json({ msg: error.message });

    }
};




const users = {
    signup,
    login,
    logout
};


module.exports = users;