let mongoose = require('mongoose');

let countries = {
    name: "india",
    population: "10868758",
    currency: "Ruppee",
    flag_image_url: "https://cdn.britannica.com/97/1597-004-05816F4E/Flag-India.jpg",
    capital: "New Delhi",
}

let CountrySchema = new mongoose.Schema({
    name: { type: String, required: true },
    napopulationme: { type: String, required: true },
    currency: { type: String, required: true },
    flag_image_url: { type: String, required: true },
    capital: { type: String, required: true },

})

let Countries = mongoose.model("Countries", CountrySchema)

module.exports = Countries

