const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const app = express();
dotenv.config({ path: ".env"})

mongoose.connect(process.env.MONGO_DB, () => {
  app.listen(3000, () => {
  console.log(`server started at http://localhost:3000`)
})

});
