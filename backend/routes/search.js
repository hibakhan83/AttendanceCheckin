const router = require('express').Router();
let Search = require('../models/search.model');

router.route('/').get((req, res) => {
    Search.find()
    .then(search => res.json(search))
    .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/add').post((req, res) => {
    const
})