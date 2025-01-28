const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const emailRoutes = require("./src/routes/emailRoutes.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Hello! This is the endpoint for sending emails.");
});

app.use("/api", emailRoutes);

app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});