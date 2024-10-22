const express = require('express');
const moviesCtrl = require('../controllers/moviesCtrl');

const router = express.Router();

router.get('/',moviesCtrl.homePage);
router.get('/form',moviesCtrl.formLoad);
router.post('/CreatMovie',moviesCtrl.CreatMovie);
router.get('/review/:id',moviesCtrl.reviewForm);
router.post('/addReview',moviesCtrl.addreview);
router.get('/reviewlist',moviesCtrl.viewPage);

module.exports = router;