const Pet = require("./pets");
const User = require("./user");
const Comment = require("./Comment");

//user has ability to post multiple pets
User.hasMany(Pet, {
  foreignKey: "userId",
});
// pet belongs to one user
Pet.belongsTo(User, {
  foreignKey: "userId",
});
// pet can have many comments
Pet.hasMany(Comment, {
  foreignKey: "petId",
});
// comment belongs to per
Comment.belongsTo(Pet, {
  foreignKey: "petId",
});
// user has many comments
User.hasMany(Comment, {
  foreignKey: "userId",
});
// comment belongs to one user
Comment.belongsTo(User, {
  foreignKey: "userId",
});
// pet has many images or one? double check on wednesday
Pet.hasOne(Image, {
  foreignKey: "petId",
});
// image belongs to one pet
Image.belongsTo(Pet, {
  foreignKey: "petId",
});

//the seller of the pet

//user can sell multiple pets

//under pet post will be able to have multiple comments

module.exports = {
  Pet,
  User,
  Image,
  Comment,
};
