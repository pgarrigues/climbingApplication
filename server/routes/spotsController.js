const express = require("express");
const router = express.Router();

const { SpotsModel } = require("../models/spotsModel");

router.get("/", (req, res) => {
  SpotsModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
});

module.exports = router;
