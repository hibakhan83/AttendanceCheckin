const router = require('express').Router();
let User = require('../models/user.model');

router.route('/filtered-event/:event').get((req, res) => {
    User.find( { event: req.params.event } )
      .then(event => res.json(event))
      .catch(err => res.status(400).json('Error: ' + err));
  });

router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const pantherId = req.body.pantherId;
    const department = req.body.department;
    const level = req.body.level;
    const campus = req.body.campus;
    const degree = req.body.degree;
    const email = req.body.email;
    const college = req.body.college;
    const year = req.body.year;

    const newUser = new User({
        firstName,
        lastName,
        pantherId,
        department,
        level,
        campus,
        degree,
        email,
        college,
        year,
    });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;