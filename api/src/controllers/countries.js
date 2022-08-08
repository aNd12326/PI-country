const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const getCountriesFromApi = async () => {
  try {
    const { data } = await axios.get("https://restcountries.com/v3/all");
    const details = data.map((e) => {
      return {
        id: e.cca3,
        name: e.name.common,
        image: e.flags[1],
        continent: e.continents[0],
        capital: e.capital?.[0],
        subRegion: e?.subregion,
        area: e.area,
        population: e.population,
      };
    });

    // guardarlo en la base de datos
    details.map((e) => {
      Country.findOrCreate({
        where: {
          id: e.id,
          name: e.name,
          image: e.image,
          continent: e.continent,
          capital: e.capital ? e.capital : "NaN",
          subRegion: e.subRegion ? e.subRegion : "NaN",
          area: e.area,
          population: e.population,
        },
      });
    });
    return details;
  } catch (error) {
    console.log(error);
  }
};

const getAll = async (req, res) => {
  let { name } = req.query;
  let getCountry;
  try {
    if (name) {
      getCountry = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%`,
          },
        },
      });
    } else {
      getCountry = await Country.findAll();
    }
    // res.status(201).json(getCountry);
    // --------- Verificacion si no existe ningin pais----------
    if (getCountry.length) {
      res.status(201).json(getCountry);
    } else {
      res.status(404).json({ err: "We could´nt find the country" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getById = async (req, res) => {
  try {
    const { idPais } = req.params;
    if (idPais) {
      const matchActivity = await Country.findAll({
        where: {
          id: idPais,
        },
        include: {
          model: Activity,
        },
        attributes: { exclude: ["createdAt", "updatedAt"] },
      });
      res.status(201).json(matchActivity);
    }
  } catch (error) {
    res.status(404).json({ msg: "Id not Found" });
    // console.log(error);.
  }
};

module.exports = { getCountriesFromApi, getAll, getById };
