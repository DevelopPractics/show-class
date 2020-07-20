const express = require('express')
const router = express.Router()
const programController =  require('../controllers/program.controller');
// Retrieve all program
router.get('/', programController.findAll);
// Create a new program
router.post('/', programController.create);
// Retrieve a single program with id
router.get('/:id', programController.findById);
// Update a program with id
router.put('/:id', programController.update);
// Delete a program with id
router.delete('/:id', programController.delete);

module.exports = router