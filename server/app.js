const dotenv=require("dotenv");
const path = require('path');
const express=require("express");
dotenv.config({path:'./config.env'});
require('./db/conn');
const port=process.env.PORT;
var cors = require('cors');
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));


app.use(cookieParser());    //browser se cookies ko access krne k liye
app.use(cors())

app.use(express.json());                // ye ek middleware h yani jo bhi data hum mil rha h postman se wo json format h to hamara application ni smjh rha to express k through usko json m convert kr rhe

const user=require("./routes/user");
app.use(user);

// serving build folder
app.use(express.static(path.join(__dirname,"../client/build")));

// yani koi bhi url ho hume uspe sirf ek hi file chalani h
app.get("/",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"../client/build/index.html"))
})


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
  });
  