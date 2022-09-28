const express = require('express');
const router = express.Router();

const employe = require('../controllers/employee');


router.post('/', employe.employeeees);

module.exports = router;