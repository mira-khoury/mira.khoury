const express = require("express");
const bodyParser = require("body-parser");
const port = 8080;
const app = express();
const sql = require("./config.js");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res) => {
    res.json({message: "welcome to my FIRST server :)"});
});

app.get('/students', function(req, res){
    sql.query("SELECT * FROM students", (err, mysqlres) => {
    if (err) {
        console.log("error: ", err);
        res.status(400).send({message: "error in getting all students from table: " + err});
        return;
        }
    console.log("got all students...");
    res.send(mysqlres);
    return;
    });
});
app.listen(port, () =>{
    console.log("server is running on port 8080.");
});

