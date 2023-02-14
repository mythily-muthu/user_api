const mongoose = require('mongoose');


let user = {

    name: "muthu",
    age: "50",
    phone_number: "9842569000",
    gender: "male",
    location: "coimbatore"

}
//shape of the user object
const Userschema = new mongoose.Schema({

    name: { type: String, required: true },
    age: { type: String, required: true },
    phone_number: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "others"], required: true },
    location: { type: String, required: true },
})

//to create user model
const User = mongoose.model("User", Userschema)

