let Countries = require('../models/country_schema');
let router = require('express').Router();

router.post("/", async (req, res) => {

    try {
        console.log("in add countries");
        console.log("body:", req.body);
        let newCountry = new Countries({
            country_name: req.body.country_name,
            population: req.body.population,
            currency: req.body.currency,
            flag_image_url: req.body.flag_image_url,
            capital: req.body.capital,
        })
        await newCountry.save()
        res.status(201).send({ message: "created successfully" })
    } catch (error) {
        res.status(404).send({ message: error.message })
    }
}),

    router.get("/", async (req, res) => {

        try {
            console.log("in get all countries");
            let allCountries = await Countries.find()
            res.status(200).send(allCountries)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }),

    router.get("/:id", async (req, res) => {

        try {
            console.log("get single country");
            console.log("params:", req.params);
            let country_id = req.params.id
            let singleCountry = await Countries.findById(country_id)
            res.status(200).send(singleCountry)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }),

    router.put("/:id", async (req, res) => {

        try {
            console.log("update single country");
            let country_id = req.params.id
            await Countries.findByIdAndUpdate(country_id, req.body)
            res.status(200).send("updated successfully")
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }),

    router.delete("/:id", async (req, res) => {

        try {
            console.log("in delete country");
            let country_id = req.params.id
            await Countries.findByIdAndDelete(country_id)
            res.status(200).send("deleted successfully")
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    })
module.exports = router