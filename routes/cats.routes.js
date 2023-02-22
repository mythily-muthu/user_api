let Cats = require('../models/cats_schema');
let router = require("express").Router();

router.post("/", async (req, res) => {
    try {
        console.log("In add cats");
        console.log("body:", req.body);

        let newCat = new Cats({
            image_url: req.body.image_url,
            breed_name: req.body.breed_name,
            price: req.body.price,
            nationality: req.body.nationality,
            description: req.body.description,
        })
        await newCat.save()
        res.status(201).send({ message: "cat created  successfully" })
    }
    catch (error) {
        res.status(404).send({ error: error.message })
    }
})

router.get("/", async (req, res) => {
    try {
        console.log("in get all cats");
        let all_Cats = await Cats.find()
        res.status(200).send(all_Cats)
    }
    catch (error) {
        res.status(404).send({ error: error.message })
    }
})

router.get("/:id", async (req, res) => {
    try {
        console.log("get single cat");
        console.log("params:", req.params);
        let cat_id = req.params.id
        let single_cat = await Cats.findById(cat_id)

        res.status(200).send(single_cat)
    }
    catch (error) {
        res.status(404).send({ error: error.message })
    }
})

router.put("/:id", async (req, res) => {
    try {
        console.log("in update cat");
        let cat_id = req.params.id
        await Cats.findByIdAndUpdate(cat_id)
        res.status(200).send({ message: "updated successfully" })
    }
    catch (error) {
        res.status(404).send({ error: error.message })
    }
})

router.delete("/:id", async (req, res) => {
    try {
        console.log("in delete cat");
        let cat_id = req.params.id
        await Cats.findByIdAndDelete(cat_id)

        res.status(200).send({ message: "deleted successfully" })
    }
    catch (error) {
        res.status(404).send({ error: error.message })
    }
})

module.exports = router