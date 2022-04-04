//J'importe le package de chiffrement bcrypt pour notre fonction signup
const bcrypt = require("bcrypt");
//J'importe mon package token
const jwt = require("jsonwebtoken");
var db = require("../../config/db.config");

exports.signup = (req, res, next) => {
  db.query(
    `SELECT * FROM utilisateurs WHERE LOWER(email) = LOWER(${db.escape(
      req.body.email
    )});`,
    (err) => {
      if (!req.body.email) {
        return res.status(409).send({
          msg: "This user is already in use!",
        });
      } else {
        // username is available
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).send({
              msg: err,
            });
          } else {
            db.query(
              `INSERT INTO utilisateurs (pseudo, email, password) VALUES ('${
                req.body.pseudo
              }','${req.body.email}',${db.escape(hash)})`,
              () => {
                return res.status(201).send({
                  msg: "The user has been registerd with us!",
                });
              }
            );
          }
        });
      }
    }
  );
};

exports.login = (req, res, next) => {
  db.query(
    `SELECT * FROM utilisateurs WHERE email = ${db.escape(req.body.email)};`,
    (err, result) => {
      // user does not exists
      if (err) {
        throw err;
      }
      if (!result.length) {
        return res.status(401).send({
          msg: "Username or password is incorrect!",
        });
      }
      // check password
      bcrypt.compare(
        req.body.password,
        result[0]["password"],
        (bErr, bResult) => {
          // wrong password
          if (bErr) {
            throw bErr;
          }
          if (bResult) {
            const token = jwt.sign(
              {
                pseudo: result[0].pseudo,
                id: result[0].id,
              },
              "SECRETKEY",
              {
                expiresIn: "7d",
              }
            );
            return res.status(200).send({
              msg: "Logged in!",
              token,
              admin: result[0],
            });
          }
          return res.status(401).send({
            msg: "Username or password is incorrect!",
          });
        }
      );
    }
  );
};
exports.delete = (req, res, next) => {
  var sql = "DELETE FROM `utilisateurs` WHERE `id`=?";
  db.query(sql, [req.params.id], function(error, results, fields) {
    if (error) throw error;
    return res.send({ message: "L'utilisateur a bien été supprimé" });
  });
};
exports.update = (req, res, next) => {};
