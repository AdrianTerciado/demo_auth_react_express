


const getProtectedResources = (req, res) => {
    console.log(req.token.email);
    //check user in DB
    res.status(200).json({ msg: "This is my secret" });
};


const resources = {
    getProtectedResources
};


module.exports = resources;