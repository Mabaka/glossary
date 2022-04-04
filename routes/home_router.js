let express = require('express');
let home_controller = require('../controllers/home_controllers');
let home_router = express.Router();

home_router.get('/',home_controller.index);

module.exports = home_router;