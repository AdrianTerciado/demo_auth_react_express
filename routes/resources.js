const express = require('express');
const resourcesRouter = express.Router();
const resources = require('../controllers/resources');
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');


resourcesRouter.get('/protectedresource', getAccessToken, decodeToken, resources.getProtectedResources);



module.exports = resourcesRouter;