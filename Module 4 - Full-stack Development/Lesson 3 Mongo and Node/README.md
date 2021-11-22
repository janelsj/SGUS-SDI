# MongoDB & Node.js

## Brief

We have went through simple MongoDB operations in the previous lesson. In this lesson, we will query MongoDB from Node.js. In this lesson, learners will code along instructor (using same set of code). We will be utilizing MongoDB's sample file which you should have already stored in the previous assignment. If you haven't follow the next section.

### Download and Load Sample Data

Download [this sample file](https://atlas-education.s3.amazonaws.com/sampledata.archive) to your directory.

Import the file into local MongoDB instance with the following command on Terminal:

```
mongorestore --archive=<path to sample file>
```

Example if you are on the same directory as sample file:

```
mongorestore --archive=sampledata.archive
```

### Part 1 - Setup a Simple Query

Step 1: Change directory to the root folder of this repository. Run the follow command to setup package.json and install `mongodb`.

```
npm init -y
npm install mongodb
```

Step 2: Create a file `find-operations.js` and write (do not copy and paste) the following JS Code.

```js
const { MongoClient } = require("mongodb"); // import
const uri = "mongodb://localhost:27017"; // uri to your local mongodb instance
const client = new MongoClient(uri); // instantiate a client with the uri

(async () => {
  await client.connect(); // connect to mongodb

  const db = client.db("sample_restaurants"); // point to sample_restaurants database
  const restaurants = db.collection("restaurants"); // point to restaurants collection

  // Find operation
  let result = await restaurants.find({ "address.zipcode": "10466" }).toArray(); // simple query 
  console.log(result, "\n length:", result.length); // logging result
})();

```

Step 3: Run the code with `node find-operations.js` and observe the output.

### Part 2 - Using `.aggregate()` function

Create a file `aggregate-operation.js` and write (do not copy and paste) the following code.

```js
const { MongoClient } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

(async () => {
  await client.connect();

  const db = client.db("sample_restaurants");
  const restaurants = db.collection("restaurants");

  // Demonstrate $match and $project pipeline.
  let pipeline = [
    {
      $match: {
        $and: [{ "address.zipcode": "10466" }, { cuisine: "Chinese" }],
      },
    }, // match zipcode and cuisine
    { $project: { restaurant_name: "$name" } }, // project "restaurant_name" as new field using the "name" field.
  ];

  let result = await restaurants.aggregate(pipeline).toArray();
  console.log(
    "aggregate $match and $project",
    result,
    "\nlength:",
    result.length
  );

  // Demonstrate $group pipeline.
  pipeline = [
    {
      $group: { _id: { cuisine: "$cuisine" }, noOfOccurences: { $count: {} } },
    },
    { $limit: 10 },
  ];

  result = await restaurants.aggregate(pipeline).toArray();
  console.log("aggregate $group", result);

  // Demonstrate $sort pipeline
  pipeline = [{ $sort: { name: -1 } }, { $limit: 10 },{$project:{name:"$name"}}];

  result = await restaurants.aggregate(pipeline).toArray();
  console.log("aggregate $sort", result);
})();


```

### Part 3 - Create Index and test performance query

Create a file `text-index.js` and write (do not copy and paste) the following code.

Note that we are using a different database `sample_airbnb` and collection `listingsAndReviews` for this exercise.

```js
const { MongoClient, MONGO_CLIENT_EVENTS } = require("mongodb");
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

(async () => {
  await client.connect();

  const db = client.db("sample_airbnb");
  const reviews = db.collection("listingsAndReviews");

  // Create text index
  let result = await reviews.createIndex({ summary: "text" });
  console.log(`Index created: ${result}`);

  // Query with index
  console.time("query with index");
  result = await reviews
    .aggregate([
      { $match: { $text: { $search: "noisy" } } },
      { $project: { url: "$listing_url", name: true, summary: true } },
    ])
    .toArray();
  console.timeEnd("query with index"); 
//   console.log("text search result", result, "\n length:", result.length); // comment this line to see performance log

  // Query without index
  console.time("query without index");
  result = await reviews
    .aggregate([
      { $match: { summary: { $regex: "noisy" } } },
      { $project: { url: "$listing_url", name: true, summary: true } },
    ])
    .toArray();
  console.timeEnd("query without index"); 
//   console.log("query result", result, "\n length:", result.length); // comment this line to see performance log
})();

```

## End




