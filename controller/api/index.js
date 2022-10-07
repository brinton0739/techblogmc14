const router = require('express').Router();
const user = require('./user');
const auth = require('./auth');
const comment = require('./comment');
const post = require('./post');

router.use('/auth', auth);
router.use('/user', user);
router.use('/comments', comment);
router.use('/posts', post);

module.exports = router;