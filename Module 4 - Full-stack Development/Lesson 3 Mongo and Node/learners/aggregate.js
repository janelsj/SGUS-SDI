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
    
    const pipeline = [
        //$match address.zipcode => 10466, cuisine => Chinese
        {$match: {"address.zipcode": "10466", "cuisine": "Chinese"}},
        
        //$project name to restaurant_name
        {$project: {restaurant_name: '$name', _id: 0}},

    ];

    const restaurantDocs = restaurants.aggregate(pipeline).toArray();
    // console.log(restaurantDocs);

    //------------------end of $match and $project---------------

    //region $group
    const groupPipeline = [
        //Find number of restaurants by cuisine
        {$group: {_id:'$cuisine', noOfOccurences:{ $count:{} } } },
        // {$project: {cuisine: '$_id', _id: 0, noOfOccurences: true}},

        //Order cuisines by popularity
        {$sort: {noOfOccurences:-1} },

        //Limit to top 5 most popular cuisines:
        {$limit: 5}
    ];

    const cuisineCount = await restaurants.aggregate(groupPipeline).toArray();
    console.log(cuisineCount);

    //------------------end of $group-------------------------

    //Get first 10 alphabetically arranged restuarants
    const first10Pipeline = [
        //Remove empty name restaurants
        // {$match: {name: {$ne: ''}}}, // $ne = 'not equals'
        {$match: {name: {$regex: '^[A-Z]'}}},
        //$sort by name
        {$sort: {name:1}},

        //Limit to 10 results
        {$limit: 10},

        //Project restuarants name
        {$project: {'restaurant_name': '$name', _id: 0}}
    ];

    const first10RestaurantDocs = await restaurants.aggregate(first10Pipeline).toArray();
    // console.log(first10RestaurantDocs);
    //------------------end of $match, $sort and $limit---------------

})();
//-------------end of Query------------------