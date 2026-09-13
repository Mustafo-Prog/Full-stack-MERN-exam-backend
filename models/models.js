const mongoose = require("mongoose");

const model = new mongoose.Schema({
    name: {type: String, required: true},
    volume: {type: Number, required: false},
    price: {type: Number, required: true, min: 0},
    category: {type: String, enum: ["pizza", "burger", "dessert", "drink"], required: true},
    available: {type: Boolean, required: true}
})

module.exports = mongoose.model("ideas_by_man", model);