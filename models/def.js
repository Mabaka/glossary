let mongoose = require('mongoose');

let Schema = mongoose.Schema;
mongoose.connect('mongodb://mongo:27017/db');

let def_schema = new Schema(
    {
        prefix: String,
        postfix: String,
        definition: String,
        created: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('definitions',def_schema);