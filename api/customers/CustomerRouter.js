const express = require("express");

const CustomerModel = require("./CustomerModel");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const customer = await CustomerModel.getAll();
    res.json(customer);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const newCustomer = await CustomerModel.create(req.body);
    res.json(newCustomer);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
