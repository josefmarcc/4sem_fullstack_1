const fetch = require("node-fetch");
const URLpeople = "https://swapi.dev/api/people/";

// callback from hell
function getPlanetforFirstSpeciesInFirstMovieForPerson(id) {
  const obj = { name: "", firstFilm: "", firstSpecies: "", homeWorld: "" };
  fetch(URLpeople + id)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      obj.name = data.name;
      return fetch(data.films[0])
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          obj.firstFilm = data.title;
          return fetch(data.species[0])
            .then((response) => {
              return response.json();
            })
            .then((data) => {
              obj.firstSpecies = data.name;
              return fetch(data.homeworld)
                .then((response) => {
                  return response.json();
                })
                .then((data) => {
                  obj.homeWorld = data.name;
                  console.log(obj);
                  return obj;
                });
            });
        });
    });
}

async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id) {
  const obj = { name: "", firstFilm: "", firstSpecies: "", homeWorld: "" };
  try {
    // På denne måde spring vi .then response over.
    const response = await fetch(URLpeople + id);
    const responseData = await response.json();
    obj.name = responseData.name;

    const response2 = await fetch(responseData.films[0]);
    const response2Data = await response2.json();
    obj.firstFilm = response2Data.title;

    const response3 = await fetch(response2Data.species[0]);
    const response3Data = await response3.json();
    obj.firstSpecies = response3Data.name;

    const response4 = await fetch(response3Data.homeworld);
    const response4Data = await response4.json();
    obj.homeWorld = response4Data.name;

    console.log(obj);
    return obj;
  } catch (error) {
    console.log(error);
  }
}

getPlanetforFirstSpeciesInFirstMovieForPerson(1);

getPlanetforFirstSpeciesInFirstMovieForPersonAsync(1);
