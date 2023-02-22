const mongoose = require("mongoose");

let cats = {
    image_url: "kkfj.jpeg",
    breed_name: "Persian short hair",
    price: "50000",
    nationality: "Italy",
    description: "Persian cats are a popular breed around the world, and they are often featured in cat shows and competitions. They are also commonly used in advertisements and media due to their distinctive appearance and popularity among cat lovers."
}

let CatsSchema = new mongoose.Schema({
    image_url: { type: String, required: true },
    breed_name: { type: String, required: true },
    price: { type: String, required: true },
    nationality: { type: String, required: true },
    description: { type: String, required: true },

})
let Cats = mongoose.model("Cats", CatsSchema)

module.exports = Cats