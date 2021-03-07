const { filterDir, filerDirP, filterDirMyPromise } = require("./filterdir");

/*
filterDir(__dirname, ".js", (err, files) => {
  if (err) {
    return console.log(err);
  }
  console.log(files);
});
*/

// filterDirMyPromise med async/await
async function tester() {
  try {
    const files = await filterDirMyPromise(__dirname, ".js");
    console.log(files);
  } catch (error) {
    console.log(error);
  }
}

tester();

async function testerSekvenselt() {}

async function testerParalelt() {}
