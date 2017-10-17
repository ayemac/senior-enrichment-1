const router = require('express').Router();
const { Collection, Cocktails } = require('../db/models');

router.get('/', (req, res, next) => {
    Collection.findAll()
    .then(collection => res.json(collection))
    .catch(next);
})

router.get('/:collectionId', (req, res, next) => {
    Collection.findById(req.params.collectionId)
    .then(collection => res.json(collection))
    .catch(next);
})

module.exports = router;
