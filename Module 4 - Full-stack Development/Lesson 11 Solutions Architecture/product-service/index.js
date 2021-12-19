const express = require('express');
const broadcast = require("./publisher");
const bodyParser = require('body-parser');
const port = 3001;
const app = express()
const {v4: uuidv4} = require("uuid");
 
app.use(bodyParser.json())

app.post('/purchase', function (req, res) {
    req.body.loggingId = uuidv4();  
    broadcast(JSON.stringify(req.body));
    res.send(req.body);
})
 
app.listen(port, ()=> console.log(`Listening to port ${port}...`));