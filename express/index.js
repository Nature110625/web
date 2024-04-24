const express = require("express"); //requires express
const app = express();  //store returned object in app

let port=3000;
app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});
// app.use((req, res)=>{
//     console.log(req);
//     console.log("request received");
//     let code="<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
//     res.send (code);
// });

app.get("/", (req, res)=>{
    res.send("You contacted root path");
});
app.get("/", (req, res)=>{

})