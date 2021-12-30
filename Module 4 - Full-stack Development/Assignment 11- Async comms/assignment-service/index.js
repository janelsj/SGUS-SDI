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

    if (req.body.score >=50) {
        const output = {
            studentId: req.body.studentId,
            score: req.body.score,
            grade: "P"
        };
        broadcast(JSON.stringify(output));
        res.send(output);
    } else {
        const output = {
            studentId: req.body.studentId,
            score: req.body.score,
            grade: "F"
        };
        broadcast(JSON.stringify(output));
        res.send(output);
    };
})
 
app.listen(port, ()=> console.log(`Listening to port ${port}...`));