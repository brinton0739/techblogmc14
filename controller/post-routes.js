const { Post, Comment, User } = require('../model')
const router = require('express').Router();

router.get('/:post_id', (req, res) => {
    Post.findByPk(req.params.post_id,
        {
            include: [
                {
                    model: Comment,
                    include: [User]
                },
                {
                    model: User
                }
            ]
        }
    )
    .then((results) => {
        const post = results.get({plain: true});
        console.log(post);
        res.render('post', {
            loggedIn: req.session.loggedIn,
            post,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;