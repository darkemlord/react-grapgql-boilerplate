const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.listen(3000, () => {
  console.log(`server started at http://localhost:3000`)
})
