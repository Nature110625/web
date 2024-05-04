const express = require("express");
const path=require("path");

const app = express();

const port=8080;

app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});
app.get("/hello", (req, res)=>{
    res.send("hello");
});
app.get("/rolldice", (req, res)=>{
    let diceval=Math.floor(Math.random()*6)+1;
    res.render("rollDice", {num: diceval});
})
app.get("/ig/:username", (req, res)=>{
    let {username}=req.params;
    const instaData=require("./data.json");
    const data = instaData[username];
    if(data)
        res.render("ig.ejs", {data});
    else
        res.render("error.ejs");
});

app.listen(port, ()=>{
    console.log(`Listening on port ${port}`);
});