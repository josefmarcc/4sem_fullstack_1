const os = require("os");

const osInfo = {
  platform: os.platform(),
  ostype: os.type(),
  freeMemory: os.freemem(),
  totalMemory: os.totalmem(),
  EOL: os.EOL,
};

module.exports = osInfo;

//console.log(osInfo);
