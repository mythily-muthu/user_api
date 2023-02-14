const User = require("../models/user_schema");
const router = require("express").Router();



//create user

router.post("/", async (req, res) => {
    try {
        console.log("in add user");
        console.log("body:", req.body);
        let newUser = new User({
            user_image: req.body.user_image,
            name: req.body.name,
            age: req.body.age,
            phone_number: req.body.phone_number,
            gender: req.body.gender,
            location: req.body.location,
        })
        //to save to db
        await newUser.save()

        res.status(201).send({ message: "user created successfully" })

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})



//read get all users
router.get("/", async (req, res) => {

    try {
        console.log("in get users");
        let all_user = await User.find();

        res.status(200).send(all_user)
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})

//get single user by id
router.get("/:id", async (req, res) => {
    try {
        console.log("in get single user");
        console.log("params:", req.params);

        let user_id = req.params.id;
        //db interaction 
        let single_user = await User.findById(user_id)
        res.status(200).send(single_user)

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})


//update user by id
router.put("/:id", async (req, res) => {
    try {
        console.log("in update user");
        let user_id = req.params.id;
        //where, what, new 
        await User.findByIdAndUpdate(user_id, req.body);//where, what

        res.status(200).send({ message: "updated successfully" });
    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})





//deleter user by id
router.delete("/:id", async (req, res) => {
    try {
        console.log("in delete user");
        let user_id = req.params.id;
        await User.findByIdAndDelete(user_id);
        res.status(200).send({ message: "successfully deleted" });

    } catch (error) {
        res.status(404).send({ error: error.message })
    }
})






module.exports = router