const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home_controller');
console.log('router loaded');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/post',require('./post'));
router.use('/comments',require('./comments'));
// for any new routes, access from here
// router.use('/routerName', require('./routerfile));

module.exports = router;