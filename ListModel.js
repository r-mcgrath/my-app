const mongoose = require('mongoose');
const {Schema} = mongoose;


const ListItem = new Schema ({
    itemName: String,
    quantity: Number
});

module.exports = mongoose.model('ListItem', ListItem);