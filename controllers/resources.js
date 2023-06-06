


const getProtectedResources = (req, res) => {
    try {
        console.log(req.token.email);
        //check user in DB
        res.status(200).json({ msg: `This is ${req.token.email}'s secret` });
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }

};


const resources = {
    getProtectedResources
};


module.exports = resources;