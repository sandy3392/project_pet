const User = require("./User");
const Post = require("./Post");
const Pet = require("./Pet");
const Comment = require("./Comment");

User.hasMany(Pet, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Pet.belongsTo(User, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Post.belongsTo(Pet, {
  foreignKey: "pet_id",
  onDelete: "cascade",
});

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Pet.hasMany(Post, {
  foreignKey: "pet_id",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});
module.exports = { User, Post, Pet, Comment };

// User.hasMany(Post, {
//     foreignKey: 'user_id',
//     onDelete: "cascade"
// });

// Post.belongsTo(User, {
//     foreignKey: 'user_id',
// });
