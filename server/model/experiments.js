const mongoose = require('mongoose');

const expSchema = new mongoose.Schema({
    expName:{
        type:String,
    },
    description:{
        type:String,
    },
    level:{
        type:Number,
    },
    subject:{
        type:String,
    },
    image:{
        type:String,
    },
    matname:{
        type:String,
    },
    matQty:{
        type:String,
    },
    safetyPercautions:{
        type:String,
    },
    instructions:{
        type:String,
    },
    createdAt: {
        type: Date,
        default: new Date()
    }

});

const experiments = mongoose.model('experiments',expSchema);

module.exports = experiments;