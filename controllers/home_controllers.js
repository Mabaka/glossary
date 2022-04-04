let definitions = require('../models/def');

exports.index = function(req,res) {
    definitions.find({},function(err,allDef){
        if(err){
            console.log(err);
            return res.sendStatus(400);
        }
        res.render('',{definitions:allDef});
    }).sort({created: -1}).limit(5);
};
