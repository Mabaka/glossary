let definitions = require('../models/def');
let prefixes = require('../models/prefix');

exports.adding_definition = function(req,res) {
    prefixes.find({},function(err,allPrefixes){
        if(err){
            console.log(err);
            return res.sendStatus(400);
        }
        res.render('adding_definition',{prefixes:allPrefixes});
    });
};

exports.definitions = function(req,res) {
    definitions.find({},function(err,allDef){
        if(err){
            console.log(err);
            return res.sendStatus(400);
        }
        res.render('definitions',{definitions:allDef});
    });
};

exports.addDefinition = function(req,res) {
    let prefix = req.body.prefix_field;
    let postfix = req.body.postfix_field;
    let definition = req.body.def_field;

    let def_instance = new definitions({prefix,postfix,definition});

    def_instance.save(function(err){
        if(err) {
            return console.log(err);
        }
        res.redirect('/definitions/');
    });
};

exports.delDef = function(req,res) {
    definitions.findOneAndDelete({_id: req.params["def_id"]},function(err,def_el){
        if(err){
            console.log(err);
        }
        res.redirect('/definitions/');
    });
}