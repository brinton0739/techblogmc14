const router = require('express').Router();
const { Comment } = require('../../model');

router.post('/', (req, res) => {
    Comment.create({
        post_id: req.body.postId,
        comment_text: req.body.commentText,
        user_id: req.session.user_id
    })
    .then((results) => {
        if (results) {
            res.status(200).json(results.get());
        } else {
            res.status(400).json('comment could not be created');
        }
    })
    .catch((err) => { 
        console.log(err);
        res.status(500).json(err);
    });
})

module.exports = router;
