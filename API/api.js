var express = require('express'); // requre the express framework
var app = express();
var fs = require('fs'); //require file system object
//to read database.json

// Endpoint to Get a list of users
app.get('/getUsers', function(req, res){
    fs.readFile(__dirname + "/" + "database.json", 'utf8', function(err, data){
        //console.log(data);
        res.end(data); // you can also use res.send()
    });
})


app.get('/getUser/:roll', function(req, res){
    fs.readFile(__dirname + "/" + "database.json", 'utf8', function(err, data){
        const getUser = function(curUser){
            return curUser.roll === req.params.roll;
        }
        data= JSON.parse(data);
        console.log(data)
        // console.log(req.params.roll)
        let user = data.filter((curUser)=>{
            return curUser.roll === req.params.roll;
        })
         // you can also use res.send() 
        
        // console.log(req.params.roll)
        // console.log(data.length)
        //res.end(JSON.stringify(data)); // you can also use res.send() 
        // res.end(data)  
        res.end(JSON.stringify(user)); 
    })
})
// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})