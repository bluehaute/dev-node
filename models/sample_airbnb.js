const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create student schema & model
const sample_airbnbSchema = new Schema({
    name: {
        type: String,
    },
    listing_url: {
        type: String,
        required: [true, 'Roll field is required']
    },
    property_type: {
        type: String,
    }
});


const sample_airbnb = mongoose.model('sample_airbnb', sample_airbnbSchema);

module.exports = sample_airbnb;