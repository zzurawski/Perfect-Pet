const path = require("path");

const home = (req, res) => {
    return res.sendFile(path.join(`${__dirname}/../views/index.html`));
    
    // willl have to put the handllebar in the index.html part
};

module.exports = {
  getHome: home,
};
