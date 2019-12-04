const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const departmentController = require('../controller/departmentController');




router.get('/',departmentController.departments_get_all);
router.get('/:id',departmentController.departments_get_byid);
router.patch('/:id',departmentController.department_update_byid);
router.post('/',departmentController.department_add);
router.delete('/:id',departmentController.department_delete_byid);




module.exports = router;