const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
name: {
    type: String,
    require: true
},
amount: {
    type: Number,
    require: false
},
    date:{
    type: Date,
        default:Date.now()
    }
});

module.exports = Item = mongoose.model('item', ItemSchema);