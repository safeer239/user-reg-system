const express = require('express');
const cors = require('cors');
require ("dotenv").config()

const userRoute = require("./Routes/userRoute");
const connectDB = require('./DB/connection');

const app = express();

app.use(express.json());
app.use(cors())

app.use("/api/auth",userRoute)

const PORT =process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log("Server listening on port "+PORT)
});
 connectDB()