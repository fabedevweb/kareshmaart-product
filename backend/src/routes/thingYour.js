const express = require("express");
//Appel la méthode Router de Express
const router = express.Router();

//J'importe mon model de sauces
const thingCtrl = require("../controllers/thingYour");
//Importer le middleware qui protègera mes routes
const auth = require("../middleware/auth");
//Importer le middleware multer
const multer = require("../middleware/multer-config");

//Nouveaux tableaux
router.post("/", multer, auth, thingCtrl.createThing);
router.get("/:id", thingCtrl.getOneThing);
router.get("/", thingCtrl.getAllThing);
router.put("/:id", multer, thingCtrl.updateThing);
router.delete("/:id", thingCtrl.deleteThing);

module.exports = router;
