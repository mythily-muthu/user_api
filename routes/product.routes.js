let Products = require('../models/product_schema');

const router = require("express").Router();

//create product

router.post("/", async (req, res) => {
    try {
        console.log("in add product");
        console.log("body:", req.body);
        let newProduct = new Products({

            product_name: req.body.product_name,
            price: req.body.price,
            description: req.body.description,
            image_url: req.body.image_url,
        })
        //to save to db
        await newProduct.save()

        res.status(201).send({ message: "product created successfully" })

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})

//read get all products
router.get("/", async (req, res) => {

    try {
        console.log("in get products");
        let all_products = await Products.find();

        res.status(200).send(all_products)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})

//get single product by id
router.get("/:id", async (req, res) => {
    try {
        console.log("in get product user");
        console.log("params:", req.params);

        let product_id = req.params.id;
        //db interaction 
        let single_product = await Products.findById(product_id)
        res.status(200).send(single_product)

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})

//update product by id
router.put("/:id", async (req, res) => {
    try {
        console.log("in update product");
        let product_id = req.params.id;
        //where, what, new 
        await Products.findByIdAndUpdate(product_id, req.body);//where, what

        res.status(200).send({ message: "updated successfully" });
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})

//delete product by id
router.delete("/:id", async (req, res) => {
    try {
        console.log("in delete product");
        let product_id = req.params.id;
        await Products.findByIdAndDelete(product_id);
        res.status(200).send({ message: "successfully deleted" });

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})






module.exports = router