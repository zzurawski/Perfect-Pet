const { User } = require("../models");

const userdata = [
  {
    email: "good@gmail.com",
    username: "realllygood",
    password: "Password2",
  },
  {
    email: "good2@gmail.com",
    username: "realllygood2",
    password: "Password22",
  },
  {
    email: "good23@gmail.com",
    username: "realllygood23",
    password: "Password223",
  },
  {
    email: "good234@gmail.com",
    username: "realllygood234",
    password: "Password2234",
  },
  {
    email: "good2345@gmail.com",
    username: "realllygood2345",
    password: "Password22345",
  },
];

const seeduser = () => User.bulkCreate(userdata);

module.exports = seeduser;
