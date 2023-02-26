let Movies = require('../models/movies_schema');
const Products = require('../models/product_schema');
let router = require('express').Router();

router.post("/", async (req, res) => {
    try {
        console.log("in add movies");
        console.log("body:", req.body);
        let newMovie = new Movies({
            title: req.body.title,
            released_year: req.body.released_year,
            movie_description: req.body.movie_description,
            genre: req.body.genre,
            image_url: req.body.image_url,
            cast: req.body.cast,
            budget: req.body.budget
        })
        await newMovie.save()
        res.status(201).send({ message: "product created successfully" })
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}),
    router.get("/", async (req, res) => {
        try {
            console.log("get all movies");
            let all_movies = await Movies.find()
            res.status(201).send(all_movies)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }),
    router.get("/:id", async (req, res) => {
        try {
            console.log("get single movies");
            let movie_id = req.params.id
            let single_movie = await Movies.findById(movie_id)
            res.status(201).send(single_movie)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }),
    router.put("/:id", async (req, res) => {
        try {
            console.log("in update movies");
            let movie_id = req.params.id
            await Movies.findByIdAndUpdate(movie_id)
            res.status(201).send("updated successfully")
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }),
    router.delete("/:id", async (req, res) => {
        try {
            console.log("in delete movies");
            let movie_id = req.params.id
            await Movies.findByIdAndDelete(movie_id)
            res.status(201).send("deleted successfully")
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    })
module.exports = router