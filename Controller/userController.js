const { validationResult } = require('express-validator');
const User = require('../Model/userModel')
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createUser = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, age, dateOfBirth, password, gender, about } = req.body;

    const existingUser = await User.findOne({ name });
    if (existingUser) {
        return res.status(400).json({ message: 'User already exists' });
    }

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save User
    const user = await User.create({
      name,
      age,
      dateOfBirth,
      password: hashedPassword,
      gender,
      about,
    });

    if(user){
      res.status(201).json({
        _id:user._id,
      name:user.name,
      age:user.age,
      dateOfBirth:user.dateOfBirth,
      password: hashedPassword,
      gender:user.gender,
      about:user.about,
      token : jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' })
      })
      // res.status(201).json({ message: "User created successfully!" });
    }
    
  } catch (error) {
    res.status(500).json({ message: "Failed to create user" });
  }
};

const getUser = async (req, res) => {
  try {
   
    const user = await User.findById(req.userId).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

  const updateUser = async (req, res) => {
    try {
      // Validation Check
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
  
      const { id } = req.params;
      let { name, age, dateOfBirth, password, gender, about } = req.body;
  
      // Find user by ID
      let user = await User.findById(id);
      if (!user) return res.status(404).json({ message: "User not found" });
  
      // Hash new password if provided
      if (password) {
        const salt = await bcrypt.genSalt(10);
        password = await bcrypt.hash(password, salt);
      }
  
      // Update user fields
      user.name = name || user.name;
      user.age = age !== undefined ? age : user.age;
      user.dateOfBirth = dateOfBirth || user.dateOfBirth;
      user.password = password || user.password;
      user.gender = gender || user.gender;
      user.about = about || user.about;
  
      // Save updated user
      await user.save();
  
      res.json({ message: "User updated successfully", user });
    } catch (error) {
      res.status(500).json({ message: "Server Error", error: error.message });
    }
  };

const deleteUser = async (req, res) => {
  try {
    const {id}=req.params
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};
