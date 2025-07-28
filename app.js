const express = require("express");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => res.render("index"));
app.get("/about", (req, res) => res.render("about"));
app.get("/contact", (req, res) => res.render("contact"));

app.listen(PORT, () => {
  console.log(`Server läuft unter http://localhost:${PORT}`);
});
