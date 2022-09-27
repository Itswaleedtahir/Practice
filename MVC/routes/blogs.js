const express = require('express')
const router = express.Router();

//requiring controllers
const controllerRouter = require('../controller/index')

//Routes for controllers
router.post('/', controllerRouter.post);
router.get('/',controllerRouter.getall);
router.get('/:blogId', controllerRouter.getsingle)
router.put('/:blogId',controllerRouter.update)
router.delete('/:blogId',controllerRouter.del)

module.exports= router;