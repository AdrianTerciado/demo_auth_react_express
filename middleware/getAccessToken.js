const express = require("express");
const getAccessToken = express.Router();


getAccessToken.use(async (req, res, next) => {
    console.log(req.headers)
    const { cookie } = req.headers;
    if (cookie.includes(`access_token=`)) {
        const cookies = cookie.split(',');
        const accessToken = cookies[0];
        const token = accessToken.split('=')[1];
        console.log("token", token);
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