// con Promesas a la api
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
