const express = require("express");
const app = express();
const db = require("./config/db");
const PORT = 1111;
const router = require("./routes/router");
require("dotenv").config();

db();

app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server has been started on ${PORT} port`);
})