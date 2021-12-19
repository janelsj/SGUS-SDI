const express = require('express');
const broadcast = require("./publisher");
const bodyParser = require('body-parser');
const port = 1883;
const app = express();
 
app.use(bodyParser.json());

app.post('/assignment', function (req, res) {
    req.body = {
        "studentId":1,
        "score":50,
    };
    broadcast(JSON.stringify(req.body));
    res.send(req.body);
})
 
app.listen(port, ()=> console.log(`Listening to port ${port}...`));