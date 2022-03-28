const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const hirdetesSchema = new Schema({
    _id:Number,
    kategoria:{
        type:Number,
        
    },
    cim:{
        type:String,
        required:true,
        unique:true,
        maxlength:100
    },
    leiras:{
        type:String,
        
        maxlength:3000
    },
    hirdetesDatuma:{
        type:Date,
        required:true,
        unique:true
        
    },
    serulesMentes:{
        type:Number
        
    },
    carFt:{
        type:Number,
        required:true,
        
    },
    kepUrl:{
        type:String,
        
        maxlength:300
    },
})

module.exports = mongoose.model('hirdetes',hirdetesSchema, 'hirdetesek');