let mongoose = require('mongoose');

let movies = {

    title: "spider man 4",
    released_year: "2014",
    movie_description: "fawfaewf",
    genre: ["horror", "action", "mystry"],
    image_url: "faewfew.jpg",
    cast: ["tommy", "mary jane", "villian"],
    budget: "50,00,000",
}

let MoviesSchema = new mongoose.Schema({
    title: { type: String, required: true },
    released_year: { type: String, required: true },
    movie_description: { type: String, required: true },
    genre: { type: [String], required: true },
    image_url: { type: String, required: true },
    cast: { type: [String], required: true },
    budget: { type: String, required: true },
})

let Movies = mongoose.model("Movies", MoviesSchema)

module.exports = Movies;