const axios = require("axios");
const { Country, Activity } = require("../db");

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
    // console.log(details);
    return details;
  } catch (error) {
    console.log(error);
  }
};

const getAll = (req, res) => {
  let { name } = req.query;
  if (name) {
    let AllLowerCase = name.toLowerCase();
    console.log(AllLowerCase);
    let countryApiByname = axios.get(
      `https://restcountries.com/v3/name/${AllLowerCase}`
    );
    //   .then((res) => console.log(res.data));
    Promise.all([countryApiByname])
      .then((resp) => {
        const [countryName] = resp;
        let countryFound = countryName.data.map((e) => {
          return {
            name: e.name.common,
            image: e.flags[1],
            continent: e.continents[0],
          };
        });
        res.json(countryFound);
      })
      .catch(() =>
        res.status(404).json({ msg: "We couldn't find the country" })
      );
  } else {
    let countryPromiseApi = getCountriesFromApi();
    Promise.all([countryPromiseApi])
      .then((resp) => res.send(resp))
      .catch((err) => console.log(err));
  }
};

const getById = async (req, res) => {
  try {
    const { idPais } = req.params;
    // const { data } = await axios.get(
    //   `https://restcountries.com/v3/alpha/${idPais}`
    // );
    // const detailsCountry = data.map((e) => {
    //   return {
    //     id: e.cioc,
    //     name: e.name.common,
    //     image: e.flags[1],
    //     continent: e.continents[0],
    //     capital: e.capital?.[0],
    //     subRegion: e?.subregion,
    //     area: e.area,
    //     population: e.population,
    //   };
    // });
    // const getActivities = await Activity.findAll();
    // ---------------
    // const detailsCoutnry = await Country.findByPk(idPais);
    // const detail = {
    //   id: detailsCoutnry.id,
    //   name: detailsCoutnry.name,
    //   image: detailsCoutnry.image,
    //   continent: detailsCoutnry.continent,
    //   capital: detailsCoutnry.capital,
    //   subRegion: detailsCoutnry.subRegion,
    //   area: detailsCoutnry.area,
    //   population: detailsCoutnry.population,
    // };
    // console.log(detail);
    // const match = detailsCountry.concat(getActivities);
    const matchActivity = await Country.findAll({
      where: {
        id: idPais,
      },
      include: {
        model: Activity,
      },
    });
    res.json(matchActivity);
  } catch (error) {
    // res.status(404).json({ msg: "Id not Found" });
    console.log(error);
  }
};

module.exports = { getCountriesFromApi, getAll, getById };
