const express = require('express');
const app = express(); //instantiate it by calling the express function
app.use(express.json()); //an express method that recognises incoming requests as a json object.

//Creating Middleware:
    app.use(function(request, response, next){
        console.log("I am a middleware of every endpoint.");
        next(); //This function passes the control back to the client request flow
    });

    app.use('/fruit/:name', function(request, response, next){
        console.log("Method", request.method);
        console.log("I am middleware of endpoint '/fruit/:name'");
        next();
    });

const fruits = [{
    name: "banana"
}, {
    name: "pineapple"
}, {
    name: "apple"
}, {
    name: "pear"
}];


app.get('/', function(request, response) {
    response.send("Hello World");
});

app.get('/fruit', function(request, response) {
    response.json(fruits);
});

app.post('/fruit', function(request, response) {
    if (fruits.length>0 && fruits.some(item=>item.name===request.body.name)){
        response.status(409); //Status 409 means there's a conflict with server
        return response.send("Fruit already exists.");
    } else {
        fruits.push(request.body);
        // response.send(request.body); // returns data with html data type. only sends, does not parse request.body as a json object.
        response.json(request.body); //returns data with json data type; parses request.body as a json object, then send.
    }
});

app.put('/fruit/:name', function(request, response){
    for (let fruit of fruits) {
        if (fruit.name === request.params.name) {
            fruit.name = request.body.name;
            response.status(200);
            return response.send("Updated successfully.")
        } else {
            response.status(404);
            return response.send("Fruit does not exist.")
        }
    }
});

app.delete('/fruit/:name', function(request, response){
    const index = fruits.findIndex(item=>item.name===request.params.name);
    if (index>=0) {
        fruits.splice(index, 1);
        response.status(200);
        return response.send("Fruit deleted.");
    } else {
        response.status(404);
        return response.send("Fruit not found.");
    }
});

app.listen(3000, function(){
    console.log("Server is running on port 3000");
});