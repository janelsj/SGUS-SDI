//Setup database client:
const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";

const dbServer = new MongoClient(uri);
//-----------end of Setup---------------


//Connect to the database and test querying:
(async()=>{
    await dbServer.connect();
    const db = dbServer.db('sample_restaurants');
    const restaurants = db.collection('restaurants');
    const restaurantDocs = await restaurants.find({"address.zipcode": "10466"}).toArray();

    console.log(`Found ${restaurantDocs.length} entries. \n Restaurant docs look like:\n`, restaurantDocs[0], )

})();
//-------------end of Query------------------