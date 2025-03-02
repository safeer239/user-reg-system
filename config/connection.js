const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Mongo db connected: ${conn.connection.host}`);
    console.log("Mongo db connected");
  } catch (error) {
    console.log("mongo DB connection Failed ");
    
  }
};
module.exports = connectDB;

