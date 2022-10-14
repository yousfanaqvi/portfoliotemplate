const exp = require('express');
const path= require("path");

const app = exp();
app.use(exp.static(path.join(__dirname,"build")));
//app.use(bodyParser.urlencoded({ extended: true }));

const port = process.env.PORT || 5000;

app.get("/",function(req,res){
    res.sendFile(path.join(__dirname,"build","index.html"));
});


app.listen(port,function(err){
    if(err)
    console.log(err);
    else
    console.log("server is running.....");

});
