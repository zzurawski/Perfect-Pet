const { User } = require("../models");

const userdata = [
  {
    email: "good@gmaill.com",
    username: "realllygood",
    password: "Password2",
  },
  {
    email: "good2@gmaill.com",
    username: "realllygood2",
    password: "Password22",
  },
  {
    email: "good23@gmaill.com",
    username: "realllygood23",
    password: "Password223",
  },
];


const seeduser = () => User.bulkCreate(userdata)

module.exports = seeduser;