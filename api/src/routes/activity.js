const axios = require("axios");
const { Router } = require("express");
const { Activity } = require("../db");

const router = Router();

router.post("/", (req, res) => {
  const { name, difficulty, duration, season } = req.body;
  if (!name || !difficulty || !duration || !season)
    res.status(500).json({ msg: "Error, faltan enviar datos" });

  const newActivity = Activity.create({
    name: String(name),
    difficulty: Number(difficulty),
    duration: Number(difficulty),
    season: String(season),
  });

  Promise.all([newActivity])
    .then((resp) => res.json(resp))
    .catch(() => res.status(404).json({ err: "La actividad ya existe !!!!" }));
});

module.exports = router;
