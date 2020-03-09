const express = require('express');
const router = express.Router();
const bookModel = require('../models/book');

/* GET home page. */
router.get('/', async function (req, res, next) {
  
  res.render('template', {
    locals: {
      title: 'Welcome'
      
      
    },
    partials: {
      partial: 'partial-index'
    }
  });
});



module.exports = router;
