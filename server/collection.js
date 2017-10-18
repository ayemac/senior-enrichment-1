const router = require('express').Router();
const { Collection, Cocktails } = require('../db/models');

router.get('/', (req, res, next) => {
    Collection.findAll()
    .then(collection => res.json(collection))
    .catch(next);
})

router.post('/', (req, res, next) => {
    Collection.create(req.body)
    .then(() => Collection.findAll())
    .then(collection => res.json(collection))
    .catch(next);
})

router.delete('/:id', (req, res, next) => {
	Collection.findById(req.params.id)
	.then(collection => collection.destroy())
	.then(() => Collection.findAll())
	.then(collection => res.json(collection))
	.catch(next);
})

router.put('/:id', (req, res, next) => {
    Cocktails.findById(req.body.cocktailId)
	.then(foundCocktail => foundCocktail.update({collectionId: req.params.id}))
	.then(() => Cocktails.findAll({include: {model: Collection}}))
	.then(cocktails => res.json(cocktails))
	.catch(next);
})


module.exports = router;
