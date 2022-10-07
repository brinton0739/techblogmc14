const router = require('express').Router();
const { User } = require('../../model');

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            email: req.body.email
        }
    })
    .then((user) => {
        if (!user) {
            res.status(401).end();
            return;
        }
        if (user.checkPassword(req.body.password)) {
            req.session.loggedIn = true;
            req.session.user_id = user.id;
            req.session.save((err) => {
                if(err) {
                    console.log(err);
                    next(err);
                } else {
                    res.status(200).end();
                }
            })
        } else {
            res.status(401).end();
        }
    })
    .catch((err) => {
        console.log(err);
        res.status(500).json(err);
    })
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(204).end();
    };
});

module.exports = router;