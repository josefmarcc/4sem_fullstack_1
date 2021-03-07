const fetch = require("node-fetch");
const URL = "https://swapi.dev/api/people/";
var now = require("performance-now");

function fetchPerson(url) {
  return fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    });
}

async function printNamesSequental() {
  var start = now();
  console.log("Before");
  try {
    const person1 = await fetchPerson(URL + "1");
    const person2 = await fetchPerson(URL + "2");
    console.log(person1.name);
    console.log(person2.name);
  } catch (error) {
    console.error(error);
  }
  var end = now();
  console.log(
    "After all. Call Sequental took " +
      (end - start).toFixed(3) +
      " millisecounds. \n \n"
  );
}

async function printNamesParallel() {
  var start = now();
  console.log("Before");
  try {
    const person1 = await fetchPerson(URL + "1");
    const person2 = await fetchPerson(URL + "2");
    const allResults = await Promise.all([person1, person2]);
    console.log(allResults[0].name);
    console.log(allResults[1].name);
  } catch (error) {
    console.error(error);
  }
  var end = now();
  console.log(
    "After all. Call Parallel took " +
      (end - start).toFixed(3) +
      " millisecounds. \n \n"
  );
}

printNamesSequental();

printNamesParallel();
