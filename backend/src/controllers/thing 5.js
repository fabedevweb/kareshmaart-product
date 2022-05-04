var db = require("../../config/db.config");
//Package fs pour supprimer un fichier image en local
const fs = require("fs");

//Créer un nouveau tableau
exports.createThing = (req, res, next) => {
  const file = req.file;
  const pictureName = req.body.name;
  const picturePrice = req.body.price;
  const pictureDescription = req.body.description;
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  const sql = `INSERT tableau SET name ='${pictureName}', price ="${picturePrice}", description ="${pictureDescription}", picture ='${imageUrl}'`;
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
exports.getAllThing = (req, res, next) => {
  db.query("SELECT * FROM tableau ORDER BY id DESC", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};
//Utilisé sur la route UpdatePost
exports.getOneThing = (req, res, next) => {
  db.query(
    `SELECT * FROM tableau WHERE id=${req.params.id}`,
    req.params.id,
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
};
exports.updateThing = (req, res, next) => {
  const comment = req.body.comment;
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  var sql = `UPDATE tableau SET comment ='${comment}', imageUrl ='${imageUrl}' WHERE id = ${req.params.id}`;
  db.query(sql, function(error, results, fields) {
    if (error) throw error;
    return res.send({ message: "Le fichier a été modifié" });
  });
};
exports.deleteThing = (req, res, next) => {
  var sql = "DELETE FROM `tableau` WHERE `id`=?";
  db.query(sql, [req.params.id], function(error, results, fields) {
    if (error) throw error;
    return res.send({ message: "Le fichier a été supprimé" });
  });
};

//Créer un nouvel article
exports.createArticle = (req, res, next) => {
  const file = req.file;
  const articleTitle = req.body.title;
  const article = req.body.article;
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  const sql = `INSERT articles SET title ="${articleTitle}", article ="${article}", picture ='${imageUrl}'`;
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
exports.getAllArticle = (req, res, next) => {
  db.query("SELECT * FROM articles ORDER BY id DESC", function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    res.end(JSON.stringify(results));
  });
};
exports.getOneArticle = (req, res, next) => {
  db.query(
    `SELECT * FROM articles WHERE id=${req.params.id} OR userId=${req.params.id}`,
    req.params.id,
    function(error, results, fields) {
      if (error) throw error;
      res.end(JSON.stringify(results));
    }
  );
};
exports.updateArticle = (req, res, next) => {
  const comment = req.body.comment;
  const imageUrl = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;

  var sql = `UPDATE articles SET comment ='${comment}', imageUrl ='${imageUrl}' WHERE id = ${req.params.id}`;
  db.query(sql, function(error, results, fields) {
    if (error) throw error;
    return res.send({ message: "Le fichier a été modifié" });
  });
};
exports.deleteArticle = (req, res, next) => {
  var sql = "DELETE FROM `articles` WHERE `id`=?";
  db.query(sql, [req.params.id], function(error, results, fields) {
    if (error) throw error;
    return res.send({ message: "Le fichier a été supprimé" });
  });
};
