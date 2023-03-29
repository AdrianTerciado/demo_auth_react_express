const express = require('express');
const resourcesRouter = express.Router();
const resources = require('../controllers/resources');
const getAccessToken = require('../middleware/getAccessToken');
const decodeToken = require('../middleware/decodeToken');
const adminRoutes = require('../middleware/adminRoutes');
const userRoutes = require('../middleware/userRoutes');


resourcesRouter.get('/protectedresource', getAccessToken, decodeToken, userRoutes, resources.getProtectedResources);




module.exports = resourcesRouter;