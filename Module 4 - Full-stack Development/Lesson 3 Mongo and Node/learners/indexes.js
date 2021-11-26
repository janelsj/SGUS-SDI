//Setup database client:
const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";

const dbServer = new MongoClient(uri);
//-----------end of Setup---------------


//Connect to the database and test querying:
(async()=>{
    await dbServer.connect();
    const db = dbServer.db('sample_airbnb');
    const listings = db.collection('listingsAndReviews');

    // Create a text index on summary
    const indexStatus = await listings.createIndex({summary: 'text'});
    console.log(indexStatus);
    
    //Query with index and time it
    console.time('searching with index')
    const noisyListingsWithIndex = await listings.aggregate([
        {$match: {$text: {$search: 'noisy'}}},
        {$project: {_id:0, name: 1}}
    ]).toArray();
    console.timeEnd('searching with index');
    console.log(noisyListingsWithIndex);

    //Query without index and time it
    console.time('searching with Regex');
    const noisyListingsWithRegex = await listings.aggregate([
        //Find noisy listings
        {$match: {summary: {$regex:'noisy'}}},
        //Project listings name
        {$project: {_id:0, name:1}}
    ]).toArray();
    console.timeEnd('searching with Regex');
    console.log(noisyListingsWithRegex);

})();
//-------------end of Query------------------