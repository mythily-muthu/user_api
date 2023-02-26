// package imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
//routes
const user_routes = require('./routes/user.routes');
const products_routes = require('./routes/product.routes');
const cats_routes = require('./routes/cats.routes');
const countries_routes = require('./routes/countries.routes');
const movies_routes = require('./routes/movies.routes');
//port
const PORT = process.env.PORT || 4000;

// db_url
// const DB_URL = "mongodb+srv://mythilymuthu:mythu123@cluster0.g0mryfy.mongodb.net/users?retryWrites=true&w=majority"

const app = express();
dotenv.config(); // just dotenv variable configuration

app.use(express.json());
app.use(cors());

// mongo db connection with atlas..
mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL, {
});

//mongoose.set('strictQuery', true);

// db connection confirmation.
let connection = mongoose.connection;

connection.once("open", () => {
    console.log("mongo db connected successfully");
})


//routes
app.use("/api/users", user_routes)
app.use("/api/products", products_routes)
app.use("/api/cats", cats_routes)
app.use("/api/countries", countries_routes)
app.use("/api/movies", movies_routes)

app.listen(PORT, () => {
    console.log(`server runs successfully at port ${PORT}`);
})

