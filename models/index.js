const Pet = require('./pets');
const User = require('./user');
const Comment = require('./Comment');

//user has ability to write multiple comments
User.hasMany(Comment, {
    foreignKey: 'comment_id',
});

//the seller of the pet
Pet.belongsTo(User, {
    foreignKey: 'user_id',
});

//user can sell multiple pets
User.hasMany(Pet, {
    foreignKey: 'pet_id'
});

//under pet post will be able to have multiple comments
Pet.hasMany(Comment, {
    foreignKey: 'comment_id',
});


module.exports = {
    Pet,
    User,
    Comment
}