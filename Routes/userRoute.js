const { createUser, getUser, updateUser, deleteUser } = require('../Controller/userController')
const validateUser = require('../Middleware/validation')

const router = require('express').Router()

router.post("/createUser",validateUser,createUser)

router.get("/getUser/:id",getUser)

router.put("/updateUser/:id",validateUser,updateUser)

router.delete("/deleteUser/:id",deleteUser)


module.exports =router