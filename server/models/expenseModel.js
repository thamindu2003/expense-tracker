const mongoose = require('mongoose');


const ExpenseSchema = new mongoose.Schema({
    title:{
        type : String,
        required : true,
        trim : true,
        maxlength : 50
    },

    amount:{
        type : Number,
        required : true,
        maxlength : 20,
        trim: true
    },

    type:{
        type : String,
        default: "income",
        required : true,
        
    },

    date:{
        type: Date,
        required : true

    },

    category:{
        type: String,
        required: true,
        trim: true

    }, 

    description:{
        type: String
    }


}, {timestapms: true})


module.exports = mongoose.model('Income', ExpenseSchema)