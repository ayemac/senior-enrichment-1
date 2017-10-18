const router = require('express').Router();
const { Collection, Cocktails } = require('../db/models');

router.get('/', (req, res, next) => {
    Cocktails.findAll({include: {model: Collection}})
    .then(cocktails => res.json(cocktails))
    .catch(next);
})

router.get('/:cocktailId', (req, res, next) => {
    Cocktails.findById(req.params.cocktailId)
    .then(cocktail => res.json(cocktail))
    .catch(next);
})

module.exports = router;
