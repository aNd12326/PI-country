const axios = require("axios");
const { Router } = require("express");
const { Activity, Country } = require("../db");

const router = Router();

// router.post("/", (req, res) => {
//   const { name, difficulty, duration, season } = req.body;
//   if (!name || !difficulty || !duration || !season)
//     res.status(500).json({ msg: "Error, faltan enviar datos" });

//   const newActivity = Activity.create({
//     name: String(name),
//     difficulty: Number(difficulty),
//     duration: Number(difficulty),
//     season: String(season),
//   });

//   Promise.all([newActivity])
//     .then((resp) => res.json(resp))
//     .catch(() => res.status(404).json({ err: "La actividad ya existe !!!!" }));
// });

router.post("/", async (req, res) => {
  const { name, difficulty, duration, season, idCountry, createdInDb } =
    req.body;
  if (!name || !difficulty || !duration || !season)
    res.status(500).json({ msg: "Error, faltan enviar datos" });

  try {
    const newActivity = await Activity.create({
      name: name,
      difficulty: difficulty,
      duration: duration,
      season: season,
      createdInDb,
    });

    const aidis = idCountry.map((e) => e.toUpperCase());
    console.log(aidis);
    aidis.map(async (e) => {
      await newActivity.addCountry(await Country.findByPk(e));
    });
    res.status(201).json(newActivity);
  } catch (error) {
    res.json({ err: "the activity was already created" });
  }
});

router.get("", async (req, res) => {
  const getAct = await Activity.findAll();
  res.json(getAct);
});

module.exports = router;
