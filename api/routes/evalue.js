const express = require('express');
const router = express.Router();

const jwt = require('jsonwebtoken');
const checkAuth = require('../middleware/check-auth');

const evalueController = require('../controller/evalueController');






router.get('/',/*checkAuth,*/evalueController.evalue_get_all);
//put this get last one because it's confuse between id and other parameter
router.get('/:id',evalueController.evalue_get_byid);

router.post('/',evalueController.evalue_add);






module.exports = router;