const express = require("express"); 
const app = express();
const pool = require("./db");  // using the instant of pool here 
app.use(express.json()) //this enable us to access req.body as json






const port = process.env.PORT || 5000  
app.listen(port,()=>console.log(`listen on this port ${port}`));