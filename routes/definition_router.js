let express = require('express');
let definitions_controller = require('../controllers/definitions_controller');
let definition_router = express.Router();
 
definition_router.use('/addDefinition',definitions_controller.addDefinition);
definition_router.get('/adding_definition', definitions_controller.adding_definition);
definition_router.get('/del_definition/:def_id', definitions_controller.delDef);
definition_router.get('/',definitions_controller.definitions);


module.exports = definition_router;