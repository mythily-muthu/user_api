// package imports
const express = require("express");
const cors = require("cors");
const { default: mongoose } = require("mongoose");
//routes
const user_routes = require('./routes/user.routes');
const products_routes = require('./routes/product.routes');
const cats_routes = require('./routes/cats.routes');
//port
const PORT = 4000;
// db_urls
const DB_URL = "mongodb+srv://mythilymuthu:mythu123@cluster0.g0mryfy.mongodb.net/users?retryWrites=true&w=majority"
const other_url = "mongodb+srv://mythilymuthu:mythu123@cluster0.g0mryfy.mongodb.net/products?retryWrites=true&w=majority"
const cats_url = "mongodb+srv://mythilymuthu:mythu123@cluster0.g0mryfy.mongodb.net/cats?retryWrites=true&w=majority"
//
const app = express();

app.use(express.json());
app.use(cors());

// mongo db connection with atlas..
mongoose.set('strictQuery', false);
mongoose.connect(DB_URL, {
});

const otherConnection = mongoose.createConnection(other_url, {
});

const catsConnection = mongoose.createConnection(cats_url, {
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


app.listen(PORT, () => {
    console.log(`server runs successfully at port ${PORT}`);
})

