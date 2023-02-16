
const express = require('express')
const router = express.Router()
const { authJwt } = require("../middleware");
const controller = require("../controllers/course_category.controller");
// middleware that is specific to this router
const Joi = require('joi');
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}) 

router.post("/", controller.create);
// router.get("/",  controller.list);
// router.get("/:id",controller.findOne);
// router.put("/:id",controller.update);
// router.delete("/:id",controller.delete)

module.exports = router