const { Post } = require('../model');

const postData = [
    {
        title: "becoming a slave army what you need to know",
        post_content: " now that megamind has taken over metrocity there will be on going classes to help you know better how to stand out as a slave army pro",
        user_id: 2
    },
    {
        title: "will metrocity ever be free again?",
        post_content: " remember freedom? It seems like it may never be coming back, freedom is a thing of the past now that metroman is gone.",
        user_id: 1
    },
    {
        title: "metroman is back, but now he is musicman?",
        post_content: " apparently metroman never died, but hid from us so that he could pursue his dream of being a Music Man",
        user_id: 2
    },
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;