const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

// set up server

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port: ${PORT}`));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../", "frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../", "frontend", "build"));
  });
}

app.use("/contact", require("./routes/emailRoutes"));
app.use("/cards", require("./routes/cardRoutes"));

//set up mongoose

console.log("connecting to MongoDb");
mongoose.connect(
  process.env.MONGODB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) return console.error(err);
    console.log("MongoDb connection is good");
  }
);
