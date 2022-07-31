const axios = require("axios");
const { Router } = require("express");
const {
  getCountriesFromApi,
  getAll,
  getById,
} = require("../controllers/countries");
const { Country } = require("../db");
const router = Router();

router.get("/", getAll);

router.get("/:idPais", getById);

module.exports = router;
