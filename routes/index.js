const express = require('express');
const router = express.Router();


const gameModel = require('../models/game');


router.get('/', async function (req, res, next) {
  const gameData = await gameModel.getgame();
  
  res.render('template', {
    locals: {
      title: 'Welcome',
      gameData: gameData,
      is_logged_in: req.session.is_logged_in
    },
    partials: {
      partial: 'partial-index'
    }
  });
});





module.exports = router;
