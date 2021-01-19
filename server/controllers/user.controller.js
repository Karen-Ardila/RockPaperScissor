const User = require('../models/scores.model');

module.exports.createUser = (req, res) => {
    User.create(req.body)
        .then(newUser => res.json(newUser))
        .catch(err => {
            if (err.code === 11000) err.errors = {
                name: {
                    message: "Username must be unique"
                }
            }
            res.status(400).json({ message: "Something went wrong", error: err })
        });
}
module.exports.getAllUsers = (req, res) => {
    User.find({})
        .then(users => res.json({ users }))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}
module.exports.updateUserById = (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(updatedUser => res.json(updatedUser))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}
module.exports.getUserById = (req, res) => {
    User.findById(req.params.id)
        .then(user => res.json(user))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}
module.exports.deleteUserById = (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(deletedUser => res.json(deletedUser))
        .catch(err => res.status(400).json({ message: "Something went wrong", error: err }));
}