const express = require("express");
const getAccessToken = express.Router();


getAccessToken.use(async (req, res, next) => {
    const { authorization } = req.headers;
    if (authorization.includes(`Bearer`)) {
        const token = authorization.split(' ')[1];
        if (token) {
            req.token = token;
            next();
        } else {
            res.sendStatus(403)
        }
    } else {
        console.log();
        res.sendStatus(403)
    };
});


module.exports = getAccessToken;
