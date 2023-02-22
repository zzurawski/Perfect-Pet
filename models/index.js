const Pet = require('./pets');
const User = require('./user');
const Comment = require('./Comment');

User.hasMany(Comment, {
    foreignKey: 'comment_id',
});

Pet.belongsTo(User, {
    foreignKey: 'user_id',
});

User.hasMany(Pet, {
    foreignKey: 'pet_id'
});

Pet.hasMany(Comment, {
    foreignKey: 'comment_id',
});

module.exports = {
    Pet,
    User,
    Comment
}