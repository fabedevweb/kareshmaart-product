const express = require("express");
//Appel la méthode Router de Express
const router = express.Router();

//J'importe mon model de sauces
const thingCtrl = require("../controllers/thingMe");
//Importer le middleware qui protègera mes routes
const auth = require("../middleware/auth");
//Importer le middleware multer
const multer = require("../middleware/multer-config");

//Nouveaux tableaux
router.post("/", multer, auth, thingCtrl.createThingMe);
router.get("/:id", thingCtrl.getOneThingMe);
router.get("/", thingCtrl.getAllThingMe);
router.delete("/:id", thingCtrl.deleteThingMe);
module.exports = router;
