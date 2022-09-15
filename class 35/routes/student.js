const express = require("express");
const router = express.Router();


//Requiring Controller here
const studentRouter = require("../controllers/student");

router.post('/',studentRouter.post);
router.get('/',studentRouter.getall);

module.exports = router;