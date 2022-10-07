const { Comment } = require('../model');

const commentData = [
    {
        user_id: 1,
        post_id: 3,
        comment_text: " why us? what did we do so wrong!"
    },
    {
        user_id: 2,
        post_id: 1,
        comment_text: " I've always wanted this to happen, YUUUUSSS!"
    },
    {
        user_id: 1,
        post_id: 2,
        comment_text: " I'm not so happy about the changes!"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;