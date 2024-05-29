const {faker}=require("@faker-js/faker");
const mysql=require("mysql2");
const express=require("express");
const app=express();
const port=8080;
const path=require("path");
const methodOverride=require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({extended: true}));  //to parse the data of patch and post request
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "MySQL11pr@kr!t!"
});

let getUser = ()=>{
    return[
        faker.string.uuid(),
        faker.internet.userName(),
        faker.internet.email(),
        faker.internet.password(),
    ];
}



//home route
app.get("/", (req, res)=>{
    let q = 'SELECT count(*) FROM user';

    try{
        connection.query(q, (err, result)=>{
            if(err) throw err;
            let count=result[0]["count(*)"];
            res.render("home.ejs", {count});
        });
    } catch (err) {
        console.log(err);
        res.render("Some error in DB");
    }
});

//show route
app.get("/user", (req, res) =>{
    let q=`SELECT * FROM user`;
    try{
        connection.query(q, (err, users)=>{
            if(err) throw err;
            // console.log(result);
            // res.send(result);
            res.render("showusers.ejs", {users});
        });
    }catch (err){
        res.send("some error in DB");
    }
});

//edit form route
app.get("/user/:id/edit", (req, res)=>{
    let {id}=req.params;
    let q= `SELECT * FROM user WHERE id='${id}'`; //note id value is a string but is not stored as string in variable id so we have to make it string by adding double quotes.
    try{
        connection.query(q, (err, result)=>{
            if(err)throw err;
            let user=result[0];
            res.render("edit.ejs", {user});
        });
    }catch (err){
        res.send("some erron in DB");
    }
});

//update route
app.patch("/user/:id",(req, res)=>{
    let {id}=req.params;
    let {password: formPass, username: newUsername}= req.body;
    let q=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q, (err, result)=>{
            if(err)throw err;
            let user=result[0];
            if(formPass!=user.password){
                res.send("wrong");
            }else{
                let q2=`UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    }catch(err){
        console.log(err);
        res.send("some error in DB");
    }
});

//add route
app.post("/user", (req, res)=>{
    let { username, email, password}= req.body;
    let id=faker.string.uuid();
    let data=[id, username, email, password];
    let q=`INSERT INTO user (id, username, email, password) values (?, ?, ?, ?)`;
    try{
        connection.query(q, data, (err, result)=>{
            if(err)throw err;
        });
    }catch(err){
        res.send("some error in DB");
    }
    res.redirect("/user");
});

//serves add form
app.get("/user/new", (req, res)=>{
    res.render("add.ejs");
});

//asks password to delete route
app.get("/user/:id/password", (req, res)=>{
    let {id}=req.params;
    res.render("askPass.ejs", {id});
});

//delete route
app.delete("/user/:id", (req, res)=>{
    let {id}=req.params;
    let {epassword}=req.body;
    let q1=`SELECT * FROM user WHERE id='${id}'`;
    try{
        connection.query(q1, (err, result)=>{
            if(err) throw err;
            let user=result[0];
            console.log(epassword);
            console.log(user.password);

            if(epassword==user.password){
                let q=`DELETE FROM user WHERE id='${id}'`;
                connection.query(q, (err, result)=>{
                    if(err) throw err;
                });
                res.redirect("/user");
            }else{
                res.send("error");
            }
        });
    }catch(err){
        res.send("some error in DB");
    }
});

app.listen(port, ()=>{
    console.log("listening to port: 8080");
});

