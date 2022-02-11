const User = require("./User");
const Post = require("./Post");
const Pet = require("./Pet");

User.hasMany(Pet, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Pet.belongsTo(User, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Post.belongsTo(Pet, {
    foreignKey: 'pet_id',
    onDelete: "cascade"
});

User.hasMany(Post, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Pet.hasMany(Post, {
    foreignKey: 'pet_id',
    onDelete: "cascade"
});

module.exports = { User , Post, Pet };

// User.hasMany(Post, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
// });