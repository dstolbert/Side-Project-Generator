var express = require("express"),
    server = express(),
    mongoose = require("mongoose"),
    seeds = require("./seeds.js");
    
    
server.use(express.static(__dirname + "/public"));
mongoose.connect(process.env.MLAB || "mongodb://localhost/generator");
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
    
    // Define schema
    var dataSchema = new mongoose.Schema({
       apps: Array,
       actions: Array,
       topics: Array,
       languages: Array,
       tools: Array
    });
    
    // Define model class
    var Data = mongoose.model("data", dataSchema);

    // SAVE SEEDS DATA
    // var data = new Data(seeds.data);
    // data.save();
    
    // Load Data
    server.get("/", function(req, res){
        Data.findOne(function (err, data){
            if(err){
                console.log(err);
            } else{
                res.render("main.ejs", {data: data});   
            }
        });
    });
});

server.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server on!"); 
});