const express = require("express");

const RepresentativeModel = require("./RepresentativeModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const representative = await RepresentativeModel.getAll();
    res.json(representative);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newRepresentative = await RepresentativeModel.create(req.body);
    res.json(newRepresentative);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
