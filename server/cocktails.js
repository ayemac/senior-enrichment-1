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

router.post('/', (req, res, next) => {
    Cocktails.create(req.body)
    .then(() => Cocktails.findAll({include: {model: Collection}}))
    .then(cocktails => res.json(cocktails) )
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
	Cocktails.findById(req.params.id)
	.then(cocktail => cocktail.destroy())
	.then(() => Cocktails.findAll({include: {model: Collection}}))
	.then(cocktails => res.json(cocktails))
	.catch(next);
})

module.exports = router;
