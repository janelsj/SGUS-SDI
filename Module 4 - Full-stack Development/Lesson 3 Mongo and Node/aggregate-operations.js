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
