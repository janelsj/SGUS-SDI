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
