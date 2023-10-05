const mongoose = require('mongoose');
const {Schema} = mongoose;


const ListItem = new Schema ({
    itemName: { type: String, required: true },
    quantity: { type: Number, default: 1 }

});

module.exports = mongoose.model('ListItem', ListItem);