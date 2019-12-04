const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const enseignantController = require('../controller/enseignantController');

//router.get('/', checkAuth,userController.users_get_all);
//router.post('/signup',userController.users_signup);
//router.post('/login',userController.users_login);
//router.delete("/:userId",userController.users_delete)


//router.get('/createTable',etudiantController.etudiant_create_table);
router.get('/',enseignantController.enseignants_get_all);
router.get('/:id',enseignantController.enseignants_get_byid);
router.patch('/:id',enseignantController.enseignant_update_byid);
router.post('/',enseignantController.enseignant_add);
//router.post('/login',etudiantController.etudiant_login);
router.delete('/:id',enseignantController.enseignant_delete_byid);




module.exports = router;