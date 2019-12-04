const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const filiereController = require('../controller/filiereController');




router.get('/',filiereController.filieres_get_all);
router.get('/:id',filiereController.filieres_get_byid);
router.patch('/:id',filiereController.filiere_update_byid);
router.post('/',filiereController.filiere_add);
router.delete('/:id',filiereController.filiere_delete_byid);




module.exports = router;