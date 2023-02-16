const db = require("../models");
// const ROLES = db.ROLES;
// const User = db.user;
const User = require('../models/user.model')

checkDuplicateUsernameOrEmail = (req, res, next) => {

  const signupDate = {
    email: req.body.email,
    username: req.body.username
  }
  User.findByEmailOrUserName(signupDate, (err, data) => {
    if(data.length > 0){
      res.status(500).send({
        message: "duplicate username or email."
      });
      return;
    }
    next();
  });

};


isAdmin = (req, res, next) => {
  User.findById(req.userId, (err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "unauthorized."
      });
   
    if(data[0].role != 1){
      res.status(500).send({
        message: "unauthorized."
      });
    }
    next();
  });
};

checkRolesExisted = (req, res, next) => {
  if (req.body.roles) {
    for (let i = 0; i < req.body.roles.length; i++) {
      if (!ROLES.includes(req.body.roles[i])) {
        res.status(400).send({
          message: "Failed! Role does not exist = " + req.body.roles[i]
        });
        return;
      }
    }
  }
  
  next();
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
  checkRolesExisted: checkRolesExisted
};

module.exports = verifySignUp;
