const express = require('express');
const resourcesRouter = express.Router();
const resources = require('../controllers/resources');
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');
const clientRoutes = require('../middleware/clientRoutes');


resourcesRouter.get('/protectedresource', getAccessToken, decodeToken, clientRoutes, resources.getProtectedResources);




module.exports = resourcesRouter;