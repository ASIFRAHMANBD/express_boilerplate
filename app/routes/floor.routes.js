// const { authJwt } = require("../middleware");
// const controller = require("../controllers/floor.controller");

// module.exports = function(app) {
//   app.use(function(req, res, next) {
//     res.header(
//       "Access-Control-Allow-Headers",
//       "x-access-token, Origin, Content-Type, Accept"
//     );
//     next();
//   });

//   var router = require("express").Router();
//   app.use('/api/floor', router);

//   router.post("/", controller.create);
//   router.get("/",  controller.list);
//   router.get("/:id",controller.findOne);
//   router.put("/:id",controller.update);
//   router.delete("/:id",controller.delete)

// };



const express = require('express')
const router = express.Router()
const { authJwt } = require("../middleware");
const controller = require("../controllers/floor.controller");
// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}) 

router.post("/",[authJwt.verifyToken], controller.create);
router.get("/",  controller.list);
router.get("/:id",controller.findOne);
router.put("/:id",controller.update);
router.delete("/:id",controller.delete)

module.exports = router