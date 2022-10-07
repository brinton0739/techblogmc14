const { Post } = require('../model')
const router = require('express').Router();

router.get('/', (req, res) => {
    Post.findAll()
    .then((results) => {
        const posts = results.map((p) => {
            return p.get();
        });
        res.render('home', {
            loggedIn: req.session.loggedIn,
            posts,
        });
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;