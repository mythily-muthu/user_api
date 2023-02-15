const mongoose = require("mongoose");


let product = {

    product_name: "iphone",
    price: "50000",
    description: "new model",
    image_url: "dsfas.jpeg"


}

let Productschema = new mongoose.Schema({

    product_name: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    image_url: { type: String, required: true },

});

const Products = mongoose.model("Products", Productschema)


module.exports = Products
