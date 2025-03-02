const express = require('express');
const cors = require('cors');
require ("dotenv").config()
const swaggerDocs = require("./swagger");
const userRoute = require("./Routes/userRoute");
const connectDB = require('./config/connection');

const app = express();
app.use(express.json());
app.use(cors())

swaggerDocs(app);
app.use("/api/auth",userRoute)
app.get("/api/genders", (req, res) => {
    res.json(["Male", "Female", "Other"]);
  });
const PORT =process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("Server listening on port "+PORT)
});
connectDB()