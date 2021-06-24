const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const leadSchema = new Schema({
    id:{ type: String },
    nombre:{ type: String },
    date:{ type: String},
    descripcion:{ type: String },
    lat:{ type: String },
    lng:{ type: String },
    type:{ type: String }
});

module.exports = mongoose.model('Marker', leadSchema,'markersmap');