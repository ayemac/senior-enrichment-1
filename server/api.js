'use strict'
const router = require('express').Router();

router.use('/collection', require('./collection'))
router.use('/cocktails', require('./cocktails'))

module.exports = router
