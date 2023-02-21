const mongoose = require("mongoose");

let cats = {
    image_url: "kkfj.jpeg",
    Bread_Name: "Persian short hair",
    Price: "50000",
    Nationality: "Italy",
    Description: "Persian cats are a popular breed around the world, and they are often featured in cat shows and competitions. They are also commonly used in advertisements and media due to their distinctive appearance and popularity among cat lovers."
}

let CatsSchema = new mongoose.Schema({
    image_url: { type: String, required: true },
    Bread_Name: { type: String, required: true },
    Price: { type: String, required: true },
    Nationality: { type: String, required: true },
    Description: { type: String, required: true },

})
let Cats = mongoose.model("Cats", CatsSchema)

module.exports = Cats