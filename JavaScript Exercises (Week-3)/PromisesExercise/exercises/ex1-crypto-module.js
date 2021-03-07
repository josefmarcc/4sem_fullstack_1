const crypto = require("crypto");

async function makeSecureRandom(size) {
  const buffer = await new Promise((resolve, reject) => {
    crypto.randomBytes(size, function (ex, buffer) {
      if (ex) {
        reject("error generating hex");
      }
      resolve(buffer);
    });
  });
  return buffer.toString("hex");
}

function getSecureRandomsArray(arr) {
  const resultsOfAll = [];
  const arrayOfPromises = arr.map(makeSecureRandom);

  Promise.all(arrayOfPromises)
    .then((obj) => {
      resultsOfAll.push(obj);
      console.log(resultsOfAll);
      return resultsOfAll;
    })
    .catch((e) => {
      console.log("Something went wrong: ", e);
    });
}

// Use this function to test.
function testMakeSecureRandom() {
  const results = [];
  makeSecureRandom(2)
    .then((obj) => {
      results.push(obj);
      return makeSecureRandom(4);
    })
    .then((obj) => {
      results.push(obj);
      return makeSecureRandom(6);
    })
    .then((r) => results.push(r))
    .catch((e) => {
      console.log("In Catch", e);
    })
    .finally(() => console.log(results.join(", ")));

  // Everything wrapped in a Promise.all
  const resultsOfAll = [];
  const arrayOfNumbers = [2, 5, 3, 2, 7];
  const arrayOfPromises = arrayOfNumbers.map(makeSecureRandom);

  Promise.all(arrayOfPromises)
    .then((obj) => {
      resultsOfAll.push(obj);
      console.log(resultsOfAll);
    })
    .catch((e) => {
      console.log("Something went wrong: ", e);
    });
}

module.exports = getSecureRandomsArray;
