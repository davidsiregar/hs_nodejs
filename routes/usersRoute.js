const express=require("express")
const router=express.Router()
const usersController=require("../controllers/usersControllers")
const authorization=require("../middlewares/authorization")

router.get("/me", authorization.verifyToken, usersController.getDetailUser)
router.get("/all", authorization.verifyToken, authorization.verifyAdmin, usersController.getAllUser)

router.put("/:id/update", authorization.verifyToken, authorization.userUpdateDeleteAuthorize)
router.delete("/:id/delete", authorization.verifyToken, authorization.userUpdateDeleteAuthorize)

module.exports=router