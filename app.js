const express = require("express");
const path = require("path");
const routes = require("./routes/index");

const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/", routes);

app.listen(3000, () => console.log(`Express server listening on port 3000`));

module.exports = app;
