const express = require('express');
const usersRouter = express.Router();
const users = require('../controllers/users');


usersRouter.post('/signup', users.signup);
usersRouter.post('/login', users.login);
usersRouter.get('/logout', users.logout);


module.exports = usersRouter;