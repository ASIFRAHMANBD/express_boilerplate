const { verifySignUp } = require("../middleware");
const authRoute = require('../routes/auth.routes')
const floorsRoute = require('../routes/floor.routes')
const userRoute = require('../routes/user.routes')
const router = require("express").Router();

module.exports = function(app) {
    app.use(function(req, res, next) {
      res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
      );
      next();
    });
  
    app.use("/api/auth", authRoute);
    app.use('/api/floor', floorsRoute);
    app.use('/api/test', userRoute);

}