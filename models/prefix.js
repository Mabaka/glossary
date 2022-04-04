let mongoose = require('mongoose');

let Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost:27017/');

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