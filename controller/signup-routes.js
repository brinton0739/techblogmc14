const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('signup', {
        loggedIn: req.session.loggedIn
    });
});

module.exports = router;