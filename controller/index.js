const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const loginRoutes = require('./login-routes');
const signupRoutes = require('./signup-routes');
const dashboardRoutes = require('./dashboard-routes')
const postRoutes = require('./post-routes');
const myPostRoutes = require('./my-post-routes');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/login', loginRoutes);
router.use('/post', postRoutes);
router.use('/signup', signupRoutes);
router.use('/mypost', myPostRoutes)

module.exports = router;