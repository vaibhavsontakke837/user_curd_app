const express = require("express")

const router = express.Router()



//create new user
router.post("/",require("../controllers/users").createUser);

//login
router.post("/login",require("../controllers/users").loginUser)

//to get all user info
router.get("/",require("../controllers/users").getAllUserInfo)

//get info of specified user
router.get("/:userId",require("../controllers/users").getUserInfo)

//to update user Info of specified user
router.put("/:userId",require("../controllers/users").updateUserInfo)

//to delete user Info
router.delete("/:userId",require("../controllers/users").deleteUserInfo)

module.exports = router