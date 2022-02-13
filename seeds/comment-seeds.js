const Comment = require("../models/Comment");

const commentData = [
  {
    comment: "test 1 for comments ",
    post_id: 1,
  },
  {
    comment: "test 2 for comments ",
    post_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
