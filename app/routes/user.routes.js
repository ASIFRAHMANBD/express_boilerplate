const express = require('express')
const router = express.Router()
const { authJwt } = require("../middleware");
const userController = require("../controllers/user.controller");
const { verifySignUp } = require("../middleware");

// middleware that is specific to this router
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
}) 

router.get("/all",userController.allAccess);
router.post("/user", [authJwt.verifyToken], userController.userBoard);
// router.post("/mod",[authJwt.verifyToken, authJwt.isModerator],  userController.moderatorBoard);
// router.post("/admin",[authJwt.verifyToken, authJwt.isAdmin],  userController.adminBoard);

module.exports = router
