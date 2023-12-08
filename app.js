const express = require("express");
const mysql = require("mysql")
const dotenv = require("dotenv")
const path = require("path");
const app = express();
const hbs = require("hbs");

app.use(express.json())


dotenv.config({
    path:"./.env"
})
const db = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE,
});


db.connect((err)=>
{
    if(err){
        console.log(err)
    }

    else
    {
        console.log('MySQL connection success')
    }
});

app.use(express.urlencoded({extended:false}));

const location = path.join(__dirname,"./public");
app.use(express.static(location));
app.set("view engine", "hbs");


const partialsPath = path.join(__dirname, "./views/partials");
hbs.registerPartials(partialsPath);

app.use("/", require("./routes/pages"))
app.use("/auth",require("./routes/auth"));


app.listen(5000,()=>{
    console.log("Server started at @ port 5000 ")
})