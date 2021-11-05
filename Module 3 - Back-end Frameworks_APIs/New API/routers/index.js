const express = require('express');
const app = express();
const generalRouter = require('./general.router');
const protectedRouter = require('./protected.router');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use('/general', generalRouter);
app.use('/protected', protectedRouter);
app.get('/', function(req, res){
    res.send("hello world")
});

app.listen(3000, ()=>{
    console.log("connecting to port 3000");
});