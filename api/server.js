const express = require("express");
const app = express();
const cors = require("cors");
const customerRouter = require("./customers/CustomerRouter");
const representativeRouter = require("./representatives/RepresentativesRouter");

app.use(express.json());
app.use(cors());


app.use("/api/customers", customerRouter);
app.use("/api/representatives", representativeRouter);

module.exports = app;
