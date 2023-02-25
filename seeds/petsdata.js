const { Pet } = require("../models");

const petdata = [
  {
    name: "Buddy",
    age: 3,
    gender: "Male",
    userId: 1,
  },
  {
    name: "Godzilla",
    age: 3,
    gender: "Female",
    userId: 2,
  },
  {
    name: "Murray",
    age: 3,
    gender: "Male",
    userId: 3,
  },
  {
    name: "Jacksonvilee Florida",
    age: 3,
    gender: "Male",
    userId: 4,
  },
  {
    name: "Gentle",
    age: 5,
    gender: "female",
    userId: 5,
  },
];

const seedPets = () => Pet.bulkCreate(petdata);

module.exports = seedPets;
