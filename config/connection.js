const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    // console.log(process.env.MONGO_URI);
    const conn = await mongoose.connect(process.env.MONGO_URI ||"mongodb+srv://mohammedsafeershefi:safeershefi@cluster0.nu9w4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    console.log(`Mongo db connected: ${conn.connection.host}`);
    console.log("Mongo db connected");
  } catch (error) {
    console.log("mongo DB connection Failed ");
    
  }
};
module.exports = connectDB;

