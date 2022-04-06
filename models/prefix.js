let mongoose = require('mongoose');

let Schema = mongoose.Schema;
mongoose.connect('mongodb://mongo:27017/db');

let prefix_schema = new Schema(
    {
        prefix: String,
        lat: String,
        prefix_def: String,
        created: {
            type: Date,
            default: Date.now
        }
    }
);

module.exports = mongoose.model('prefixes',prefix_schema);