const express = require("express");
const app = express();
app.use(express.json());

const fruits = [
  {
    name: "banana",
  },
  {
    name: "durian",
  },
];

// Part 4.1
app.use(function(req, res, next){
    console.log("I am a middleware of every endpoints");
    next(); // must be called
});

// Part 4.2
app.use("/fruit/:name",function(req, res, next){
    console.log("Method:", req.method);
    console.log("I am middleware of endpoint '/fruit/:name' regardless of the http methods.");
    next();// must be called
});


app.get("/", function (req, res) {
  res.send("Hello World");
});

// Part 2.2
app.post("/fruit", function (req, res) {
  if (fruits.length > 0 && fruits.some((f) => f.name === req.body.name)) {
    res.status(409);
    return res.send("Fruit already exist");
  }
  fruits.push(req.body);
  res.json(req.body);
});

// part 2.1
app.get("/fruit", function (req, res) {
  res.json(fruits);
});

// Part 3.1
app.put("/fruit/:name", function (req, res) {
  for (let f of fruits) {
    if (f.name === req.params.name) {
      f.name = req.body.name;
      res.status(200);
      return res.send("Update successful");
    }
  }
  res.status(404);
  res.send("Fruit not found");
});

// Part 3.2
app.delete("/fruit/:name", function(req, res){
    const index = fruits.findIndex((el) => el.name === req.params.name);
    if(index >= 0){
        fruits.splice(index, 1);
        res.status(200);
        return res.send("Delete successful");
    }

    res.status(404);
    return res.send("Fruit not found");    
})



app.listen(3000);
