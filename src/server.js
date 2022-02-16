require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require('path');
const app = express();
const ejsMate = require('ejs-mate');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended: true}))
app.use(express.json());


app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


// sample for express server
app.use("/", (req, res, next) => {
  res.status(200).json({ success: true, data: "Start Here" });
});

const mongoose = require('mongoose');
const URL = process.env.DB_URL||'mongodb://127.0.0.1/Twitter';
mongoose.connect(URL, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on("error", console.error.bind(console, 'MongoDB connection error:'));
db.once("open", () => {
    console.log("Database connected");
})

const PORT = process.env.PORT || 8080; // port at which server listening

app.listen(
  PORT,
  console.log(`server started in ${process.env.NODE_ENV} mode at port ${PORT}`)
);

// fetch routes
let userRouter = require('./routes/user');

//define root routes.
app.use('/user', userRouter);

