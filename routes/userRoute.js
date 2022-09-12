const express = require("express");
const userControllers = require("../controllers/userControllers");
// const {verifyAuthorizationToken}=require("../middlewares/userMiddlewares")
const router = express.Router();

router.post("/register", userControllers.register);
router.post("/login", userControllers.login);

module.exports = router;
