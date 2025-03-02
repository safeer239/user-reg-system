const { createUser, getUser, updateUser, deleteUser } = require('../Controller/userController');
const authMiddleware = require('../Middleware/authMiddleware');
const validateUser = require('../Middleware/validation')

const router = require('express').Router()

/**
 * @swagger
 * /api/auth/createUser:
 *   post:
 *     summary: Create a new user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *               password:
 *                 type: string
 *               gender:
 *                 type: string
 *               about:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Bad request
 */
router.post("/createUser",validateUser,createUser);

/**
 * @swagger
 * /api/auth/getUser:
 *   get:
 *     summary: Get user details
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: User not found
 */
router.get("/getUser",authMiddleware,getUser);

/**
 * @swagger
 * /api/auth/updateUser/{id}:
 *   put:
 *     summary: Update user details
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               age:
 *                 type: integer
 *               dateOfBirth:
 *                 type: string
 *                 format: date
 *               gender:
 *                 type: string
 *               about:
 *                 type: string
 *     responses:
 *       200:
 *         description: User updated successfully
 *       404:
 *         description: User not found
 */
router.put("/updateUser/:id",validateUser,updateUser);

/**
 * @swagger
 * /api/auth/deleteUser/{id}:
 *   delete:
 *     summary: Delete a user
 *     tags: [User]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: User deleted successfully
 *       404:
 *         description: User not found
 */
router.delete("/deleteUser/:id",deleteUser);


module.exports =router