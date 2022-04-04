let prefixes = require('../models/prefix');

exports.prefixes = function(req,res) {
    prefixes.find({},function(err,allPrefixes){
        if(err){
            console.log(err);
            return res.sendStatus(400);
        }
        res.render('prefixes',{prefixes:allPrefixes});
    });
}

exports.adding_prefix = function(req,res) {
    res.render('adding_prefix');
}

exports.addPrefix = function(req,res) {
    let prefix = req.body.prefix_field;
    let lat = req.body.prefix_lat_field;
    let prefix_def = req.body.prefix_def_field;

    let prefix_instance = new prefixes({prefix,lat,prefix_def});
    
    prefix_instance.save(function(err){
        if(err) {
            return console.log(err);
        }
        res.redirect('/prefixes/');
    });
}

exports.delPrefix = function(req,res) {
    prefixes.findOneAndDelete({_id: req.params["prefix_id"]},function(err,prefix_el){
        if(err){
            console.log(err);
        }
        res.redirect('/prefixes/');
    });
}