const express = require('express')
const router = express.Router();

const studentControllers = require('../controller/student')

router.post('/', studentControllers.post)

 router.get('/', studentControllers.getall)

router.get('/:studentid', studentControllers.getsngle)

//router.put('/:studentid', studentControllers.updatest)

//router.delete('/', studentControllers)

module.exports = router;