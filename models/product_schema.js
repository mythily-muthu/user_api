const mongoose = require("mongoose");

let ProductSchema = new mongoose.Schema({
    product_name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String, required: true },

});

const Products = mongoose.model("Products")


module.exports = Products