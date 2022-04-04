let express = require('express');
let prefix_controller = require('../controllers/prefix_controller');
let prefix_router = express.Router();

prefix_router.use('/addPrefix', prefix_controller.addPrefix)
prefix_router.get('/adding_prefix', prefix_controller.adding_prefix);
prefix_router.get('/del_prefix/:prefix_id', prefix_controller.delPrefix);
prefix_router.get('/',prefix_controller.prefixes);

module.exports = prefix_router;