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
    fs.readFileSync(__dirname + "/" + "users.json", 'utf8', function(err, data){
        const getUser= function(user){
            return user.roll === req.params.roll;
        }
        let user = data.map(getUser(user))
        res.end(user); // you can also use res.send()    
    })
})
// Create a server to listen at port 8080
var server = app.listen(8080, function(){
    var host = server.address().address
    var port = server.address().port
    console.log("REST API demo app listening at http://%s:%s", host, port)
})