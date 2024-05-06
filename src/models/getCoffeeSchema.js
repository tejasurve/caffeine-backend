import mongoose from "mongoose";

const coffeeData = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    description: {
        type: String,
        required : true,
    },
    price: {
        type: Number,
        required : true,
    },
    extras: {
        type: Array,
        required : true,
        default: []
    },
    wishlisted: {
        type: Boolean,
        required : true,
        default: false
        
    },
    type: {
        type: String,
        enum:['hot', 'cold'],
        required : true,
    }
},{timestamps: true});

export const coffee = mongoose.model("Coffee", coffeeData);