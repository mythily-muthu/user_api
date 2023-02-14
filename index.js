// package imports

const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
const user_routes = require('./routes/user.routes');
const PORT = 4000;
const DB_URL = "mongodb+srv://mythilymuthu:mythu123@cluster0.g0mryfy.mongodb.net/users?retryWrites=true&w=majority"
const app = express();

app.use(express.json());
app.use(cors());

// mongo db connection with atlas..
mongoose.set('strictQuery', false);
mongoose.connect(DB_URL, {
   
})
//mongoose.set('strictQuery', true);

// db connection confirmation.
let connection = mongoose.connection;

connection.once("open", () => {
    console.log("mongo db connected successfully");
})


//routes
app.use("/api/users", user_routes)



app.listen(PORT, () => {
    console.log(`server runs successfully at port ${PORT}`);
})

