var db = require("../../config/db.config");
//Package fs pour supprimer un fichier image en local
const fs = require("fs");

//Créer un nouveau tableau
//Mes tableaux
exports.createThingArticle = (req, res, next) => {
  const file = req.file;
  const blogTitle = req.body.title;
  const blogContent1 = req.body.paragraphe1;
  const blogContent2 = req.body.paragraphe2;
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  const sql = `INSERT blog SET title ='${blogTitle}', paragraphe1 ="${blogContent1}", paragraphe2 ="${blogContent2}", picture ='${imageUrl}'`;
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

exports.getOneThingArticle = (req, res, next) => {
  db.query(
    `SELECT * FROM blog WHERE id=${req.params.id}`,
    req.params.id,
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
};

exports.getAllThingArticle = (req, res, next) => {
  db.query("SELECT * FROM blog ORDER BY id DESC", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};
exports.deleteThingArticle = (req, res, next) => {
  var sql = "DELETE FROM `blog` WHERE `id`=?";
  db.query(sql, [req.params.id], function(error, results, fields) {
    if (error) throw error;
    return res.send({ message: "Le fichier a été supprimé" });
  });
};
