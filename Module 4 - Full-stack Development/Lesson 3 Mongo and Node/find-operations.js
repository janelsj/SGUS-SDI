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
