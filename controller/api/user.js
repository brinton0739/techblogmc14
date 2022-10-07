const router = require('express').Router();
const { User } = require('../../model');

router.post('/', (req, res) => {
    User.create(req.body)
        .then((user) => {
            if (user) {
                req.session.loggedIn = true;
                req.session.user_id = user.id;
                req.session.save((err) => {
                    if(err) {
                        console.log(err);
                        next(err);
                    }
                })
                res.status(200).end();
            } else {
                res.status(400).json('unable to create user');
            }
        })
        .catch((err) => { 
            console.log(err);
            res.status(500).json(err);
        });
})

module.exports = router;
