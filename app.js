const express = require("express");
const app = express();
const port = 3000;

const posts = require("./posts.js");

app.get("/", (req, res) => {
    res.send("Server del mio blog");
});


app.listen(port, () => {
    console.log(`Server port: ${port}`);
});