const express = require("express");
const path = require("path");
const { json } = require("stream/consumers");

const PORT = 5000;
const app = express();

app.use(express.static(path.join(__dirname, "static")));
app.use(json());

app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "index.html")));

app.get("/api", (req, res) => res.json('qwerty'))

app.listen(PORT, () => console.log(`Server starts on port ${PORT}`));
