const express = require("express");
const bodyParser = require("body-parser");
// Path permet à l'API de savoir ou se trouve les images à récupérer
const path = require("path");
// import employee routes
const userRoutes = require("./src/routes/user");
const thingRoutesYour = require("./src/routes/thingYour");
const thingRoutesMe = require("./src/routes/thingMe");
const thingRoutesBlog = require("./src/routes/thingBlog");
// create express app
const app = express();

// setup the server port
const port = process.env.PORT || 3306;
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// parse request data content type application/json
app.use(bodyParser.json());

//Importer les images
// Path permet à l'API de savoir ou se trouve les images à récupérer
app.use("/images", express.static(path.join(__dirname, "images")));
app.use(express.static(path.join(__dirname, "../client-build")));
app.get("http://localhost:3306/api/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client-build/index.html"));
});

app.use("/api/auth", userRoutes);
app.use("/api/your/", thingRoutesYour);
app.use("/api/me/", thingRoutesMe);
app.use("/api/blog/", thingRoutesBlog);
// listen to the port
app.listen(port, () => {
  console.log(`Express is running at port ${port}`);
});

module.exports = app;
