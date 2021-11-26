const {MongoClient} = require('mongodb');
const uri = "mongodb://localhost:27017";

const dbServer = new MongoClient(uri);

(async()=>{
    await dbServer.connect();
    const db = dbServer.db('sample_supplies');
    const sales = db.collection('sales');
    // const salesDocs = await sales.find().toArray();
    // console.log(`Found ${salesDocs.length} entries. \n Sales docs look like:\n`, salesDocs[5]);

//Business Requirement 1 - List the total cost for each purchase. (sum up the `price` properties in array `items`)
    const salesPipeline = [
        {$unwind: "$items"},
        {$group: {_id:'$_id', items: {$push: {$concat: [{$toString: "$items.price"}, " > ", {$toString: "$items.quantity"}]}}, total: {$sum: { $multiply: [ "$items.price", "$items.quantity" ] }} } },
    ];

    const salesCost = await sales.aggregate(salesPipeline).toArray();
    // console.log(salesCost);

//Business Requirement 2 - What are the different types of purchase method and which are more popular?
    const purchaseMethodPipeline = [
        {$group: {_id:'$purchaseMethod', noOfOccurences:{ $count:{} } } },
        {$sort: {noOfOccurences:-1} },
        {$project: {_id: 1, noOfOccurences: 1}},
    ];

    const purchaseMethods = await sales.aggregate(purchaseMethodPipeline).toArray();
    // console.log(purchaseMethods);

//Business Requirement 3 - What is the average spending for the distinct purchase methods?
const purchaseMethodAvgPipeline = [
    {$unwind: "$items"},
    {$group: {_id:'$purchaseMethod', totalPrice: {$sum:"$items.price"}, totalQuantity:{$count:{}}, average: {$avg:"$items.price"} } },
    {$sort: {_id: 1} },
];

const purchaseMethodsAvg = await sales.aggregate(purchaseMethodAvgPipeline).toArray();
// console.log(purchaseMethodsAvg);

// Business Requirement 4 - What are the top 10 most popular purchased items and their price?
    const popularPurchasePipeline = [
        {$unwind: "$items"},
        {$group: {_id:'$items.name', price: {$push: "$items.price"}, totalPurchasedQuantity: {$sum: "$items.quantity" } } },
        {$sort: {totalPurchasedQuantity:-1}},
        {$limit:10},
        {$project: {item:"$_id", _id:0, price:1, totalPurchasedQuantity:1}}
    ];
    const top10popularItems = await sales.aggregate(popularPurchasePipeline).toArray();
    console.log(top10popularItems);
})();