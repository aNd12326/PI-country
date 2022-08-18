const { Router } = require("express");
const {
  getAll,
  getById,
  createCountry,
} = require("../controllers/countries");
const router = Router();

router.get("/", getAll);

router.get("/:idPais", getById);

router.post("/newCountry", createCountry)
module.exports = router;
