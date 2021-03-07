const fs = require("fs");
const { resolve } = require("path");
const util = require("util");

// Importer en readdir med promise.
const readdir = util.promisify(fs.readdir);

// Functionen uden promise. Men med callback
function filterDir(path, ext, cb) {
  fs.readdir(path, (err, b) => {
    if (err) {
      cb(err);
    }
    const filtered = b.filter((f) => f.endsWith(ext));
    cb(null, filtered);
  });
}

// filterDir med eget promise.
function filterDirMyPromise(path, ext) {
  return new Promise((resolve, reject) => {
    filterDir(path, ext, (err, files) => {
      // hvis der er en fejl vil den reject og ryge ind i en catch
      if (err) {
        reject(err);
      }
      // hvis ingen fejl vil den sende files tilbage.
      resolve(files);
    });
  });
}

/*
filterDir(__dirname, ".json", (err, files) => {
  if (err) {
    return console.log(err);
  }
  console.log(files);
});
*/

// Functionen med promise. filtered bliver returneret som et promise.
function filerDirP(path, ext) {
  return readdir(path).then((files) => {
    const filtered = files.filter((f) => f.endsWith(ext));
    return filtered;
  });
}

/*
filerDirP(__dirname, ".js")
  .then((files) => console.log(files))
  .catch((e) => console.error(e));
*/

module.exports = { filterDir, filerDirP, filterDirMyPromise };
