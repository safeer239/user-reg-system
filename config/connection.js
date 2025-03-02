const mongoose = require("mongoose");
require('dotenv').config();

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error.message)
    console.log("mongo DB connection Failed ");
    
  }
};
module.exports = connectDB;

