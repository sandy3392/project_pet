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

// User.hasMany(Post, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
// });


module.exports = { User , Post, Pet };