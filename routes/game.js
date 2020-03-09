const express = require('express');
const router = express.Router();
const gameModel = require('../models/game')


router.get('/game', async (req, res, next) => {
  const gameData = await gameModel.getgameId();
  
  res.render('template', {
    locals: {
      title: gameData('name'),
      gameData: gameData,
      is_logged_in: req.session.is_logged_in
    },
    partials: {
      partial: 'partial-game'
    }
  });
});

module.exports = router;
