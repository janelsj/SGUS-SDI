//-----------------------Code Challenge 1:---------------------------------
//Find records where items.price is greater than 10.
db.invoice.find({"items.price":{$gte:10}});

//Find records where items.item contains letter “s”
db.invoice.find( { "items.item": { $regex: "s" } } ); 
    OR
db.invoice.find( { "items.item": /s/} ); 

//-----------------------Code Challenge 2:---------------------------------
// Update invoiceNo from “invoice_3” to “invoice_4” using updateOne() --->
db.invoice.updateOne({"invoiceNo":"invoice_3"},{$set:{"invoiceNo":"invoice_4"}});

//Add {status:’paid’} to every documents using updateMany() -->
db.invoice.updateMany({}, {$set:{status:'paid'}});

//Delete record(s) where items.warranty property is not present using deleteMany() -->
db.invoice.deleteMany({"items.warranty": { "$exists": false } });

//Delete a record where invoiceNo is equals to “invoice_1” using deleteOne() -->
db.invoice.deleteOne({"invoiceNo":"invoice_1"});