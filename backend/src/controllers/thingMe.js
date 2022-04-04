var db = require("../../config/db.config");
//Package fs pour supprimer un fichier image en local
const fs = require("fs");

//Créer un nouveau tableau
//Mes tableaux
exports.createThingMe = (req, res, next) => {
  const file = req.file;
  const pictureName = req.body.name;
  const picturePrice = req.body.price;
  const pictureDescription = req.body.description;
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  const sql = `INSERT tableauMe SET name ='${pictureName}', price ="${picturePrice}", description ="${pictureDescription}", picture ='${imageUrl}'`;
  if (!file) {
    return res.status(400).send({ message: "Please upload a file." });
  } else {
    db.query(sql, (err) => {
      if (err) {
        throw err;
      }
      return res.send({ message: "File is successfully.", file });
    });
  }
};

exports.getOneThingMe = (req, res, next) => {
  db.query(
    `SELECT * FROM tableauMe WHERE id=${req.params.id}`,
    req.params.id,
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
};

exports.getAllThingMe = (req, res, next) => {
  db.query("SELECT * FROM tableauMe ORDER BY id DESC", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};
exports.deleteThingMe = (req, res, next) => {
  var sql = "DELETE FROM `tableauMe` WHERE `id`=?";
  db.query(sql, [req.params.id], function(error, results, fields) {
    if (error) throw error;
    return res.send({ message: "Le fichier a été supprimé" });
  });
};
