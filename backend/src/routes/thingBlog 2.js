const express = require("express");
//Appel la méthode Router de Express
const router = express.Router();

//J'importe mon model de sauces
const thingCtrl = require("../controllers/thingBlog");
//Importer le middleware qui protègera mes routes
const auth = require("../middleware/auth");
//Importer le middleware multer
const multer = require("../middleware/multer-config");

//Nouvel article de blog
router.post("", multer, auth, thingCtrl.createThingArticle);
router.get("/:id", thingCtrl.getOneThingArticle);
router.get("", thingCtrl.getAllThingArticle);
router.delete("/:id", thingCtrl.deleteThingArticle);
module.exports = router;
