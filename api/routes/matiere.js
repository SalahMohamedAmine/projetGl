const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const matiereController = require('../controller/matiereController');




router.get('/',matiereController.matieres_get_all);
router.get('/:id',matiereController.matieres_get_byid);
router.patch('/:id',matiereController.matiere_update_byid);
router.post('/',matiereController.matiere_add);
router.delete('/:id',matiereController.matiere_delete_byid);




module.exports = router;