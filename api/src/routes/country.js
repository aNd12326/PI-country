const { Router } = require("express");
const {
  getAll,
  getById,
} = require("../controllers/countries");
const router = Router();

router.get("/", getAll);

router.get("/:idPais", getById);

module.exports = router;
