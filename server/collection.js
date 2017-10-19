const router = require('express').Router();
const { Collection } = require('../db/models');

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

router.put('/edit/:collectionId', (req, res, next) => {
    Collection.findById(req.params.collectionId)
    .then(foundCollection => foundCollection.update(req.body))
    .then(() => Collection.findAll())
	.then(collection => res.json(collection))
	.catch(next);
})


module.exports = router;
