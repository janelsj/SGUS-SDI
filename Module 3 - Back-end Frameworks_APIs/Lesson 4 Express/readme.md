# Lesson 3.4 - Express Middleware

## Brief

Learners may reference `instructor` folder on how to setup a node.js application. Instructor will be guiding learners to setup Node.js project in class.

### Part 1 - SEtup Node.js & Express

Step 1: In your VS Code Terminal, change directory to `./learners` 
Step 2: Run `npm init` to setup `package.json`.
Step 3: Create `index.js` in the same directory as `package.json`. `index.js` will be the entry point for this node application.
Step 4: Add a start script in `package.json`. 

```js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
```

Step 5: Install `express` by running `npm install express`.
Step 6: Follow the first example in [express npm site](https://www.npmjs.com/package/express) - add the following code into `index.js`.

``` js
const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)

```

Step 7: On your terminal, run `npm run start` or `npm start` (shortcut) to start node.js application.

Step 8: Open browser, use the extension installed as mentioned in self study materials and call this URL with `GET` method. `http://localhost:3000`.

### Part 2 - Create POST and GET Endpoints

In the `index.js`, let's initialize an array `fruits` with default value.
```js
const fruits = [
  {
    name: "banana",
  },
  {
    name: "durian",
  },
];
```

| Task # | Path         | Verb   | Request Body              | Response Body             | Description                                      |
|--------|--------------|--------|---------------------------|---------------------------|--------------------------------------------------|
| 1      | /fruit       | GET    | Nil                       | An array of fruits        |                                                  |
| 2      | /fruit       | POST   | JSON:  { "name":"Apple" } | JSON:  { "name":"Apple" } |                                                 

Consider the above endpoints, instructor guide the students to implement the above endpoints.

### Part 3 - Create PUT, DELETE and GET Endpoints

| Task # | Path         | Verb   | Request Body              | Response Body             | Description                                      |
|--------|--------------|--------|---------------------------|---------------------------|--------------------------------------------------|                                               
| 3      | /fruit/:name | PUT    | JSON:  { "name":"Apple" } | JSON:  { "name":"Apple" } |                                                  |
| 4      | /fruit/:name | DELETE | Nil                       | Nil                       | Just return status 200 for success.              |


Instructor guide students to implement task #3 and #4.

### Part 4 - Middleware

Middleware must be declared before the endpoints. See [index.js](./instructor/index.js).

