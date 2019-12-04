const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const etudiantController = require('../controller/etudiantController');

//router.get('/', checkAuth,userController.users_get_all);
//router.post('/signup',userController.users_signup);
//router.post('/login',userController.users_login);
//router.delete("/:userId",userController.users_delete)


//router.get('/createTable',etudiantController.etudiant_create_table);
router.get('/',checkAuth,etudiantController.etudiants_get_all);
router.get('/:id',etudiantController.etudiants_get_byid);
router.patch('/:id',etudiantController.etudiant_update_byid);
router.post('/',etudiantController.etudiant_add);
router.post('/login',etudiantController.etudiant_login);
router.delete('/:id',etudiantController.etudiant_delete_byid);




module.exports = router;