const { Post } = require("../models");

const postData = [
  {
    post_desc: "test post 1",
    user_id: 1,
    pet_id: 1,
  },
  {  
    post_desc: "test post 2",
    user_id: 2,
    pet_id: 2,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;