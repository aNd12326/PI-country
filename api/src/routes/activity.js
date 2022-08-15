const { Router } = require("express");
const { getActivities, postActivities } = require("../controllers/activities");

const router = Router();

router.post("/", postActivities);

router.get("/", getActivities);

module.exports = router;
