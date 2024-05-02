const mongoose = require('mongoose');
const validator = require('validator');


const NearSchema= new mongoose.Schema({
    creatorname: {
        type: String,
        unique: true,
        required: [true, 'Your account name is required'],
        validate: {
            validator: (value) => !/\s/.test(value),
            message: 'There should be no space in your name'
        }
    },
    public_key:String,
    receiver_id:String,
 createdAt: { type: Date, default: Date.now }
})

module.exports  = mongoose.model('NearAccount',NearSchema)