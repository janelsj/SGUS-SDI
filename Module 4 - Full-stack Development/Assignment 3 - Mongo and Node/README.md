# MongoDB & Node.js: Assignment

## Brief

In this assignment, we will use the database `sample_supplies` and collection `sales`. Based on the stated business requirements, you are to write queries and aggregations (as answers) that produce results to meet the needs. This assignment will not tell you which data to query and what to return. You have to make a sensible decision on your own with optimization in mind. The general rule is not to produce data that are more than required. 


No codebase is provided in this assignment. You are to set up Node project and install `mongodb` package. Write mongo operations with Node.js and ensure those are working code. Copy the relevant code (the query/aggregation pipeline) to answer the questions here. 


### Business Requirement 1 - List the total cost for each purchase. (sum up the `price` properties in array `items`)

```
    const salesPipeline = [
        {$unwind: "$items"},
        {$group: {_id:'$_id', total: {$sum: { $multiply: [ "$items.price", "$items.quantity" ] }} } },
    ];

    const salesCost = await sales.aggregate(salesPipeline).toArray();
    console.log(salesCost);
```

### Business Requirement 2 - What are the different types of purchase method and which are more popular?

```
    const purchaseMethodPipeline = [
        {$group: {_id:'$purchaseMethod', noOfOccurences:{ $count:{} } } },
        {$sort: {noOfOccurences:-1} },
        {$project: {_id: 1, noOfOccurences: 1}},
    ];

    const purchaseMethods = await sales.aggregate(purchaseMethodPipeline).toArray();
    console.log(purchaseMethods);
    ________________________________
    OUTPUT:
    [
        { _id: 'In store', noOfOccurences: 2819 },
        { _id: 'Online', noOfOccurences: 1585 },
        { _id: 'Phone', noOfOccurences: 596 }
    ]
```

### Business Requirement 3 - What is the average spending for the distinct purchase methods?

```
    const purchaseMethodAvgPipeline = [
        {$unwind: "$items"},
        {$group: {_id:'$purchaseMethod', average: {$avg:"$items.price"} } },
        {$sort: {_id: 1} },
    ];

    const purchaseMethodsAvg = await sales.aggregate(purchaseMethodAvgPipeline).toArray();
    console.log(purchaseMethodsAvg);
    ________________________________
    OUTPUT:
    [
        {_id: 'In store', average: new Decimal128("113.0791652274035693724812895797352")},
        {_id: 'Online', average: new Decimal128("114.2300209692451071761416589002796")},
        {_id: 'Phone', average: new Decimal128("109.9781279105867742936976094380627")}
    ]
```

### Business Requirement 4 - What are the top 10 most popular purchased items and their price?

```
    const popularPurchasePipeline = [
        {$unwind: "$items"},
        {$group: {_id:'$items.name', price: {$push: "$items.price"}, totalPurchasedQuantity: {$sum: "$items.quantity" } } },
        {$sort: {totalPurchasedQuantity:-1}},
        {$limit:10},
        {$project: {item:"$_id", _id:0, price:1, totalPurchasedQuantity:1}}
    ];
    const top10popularItems = await sales.aggregate(popularPurchasePipeline).toArray();
    console.log(top10popularItems);
    ________________________________
    OUTPUT:
    [
  {
    price: [
      new Decimal128("14.16"), new Decimal128("28.31"), new Decimal128("24.68"),
      new Decimal128("20.08"), new Decimal128("27.33"), new Decimal128("18.67"),
      new Decimal128("13.44"), new Decimal128("16.66"), new Decimal128("11.05"),
      new Decimal128("20.94"), new Decimal128("23.71"), new Decimal128("21.22"),
      new Decimal128("11.82"), new Decimal128("14.44"), new Decimal128("16.7"),
      new Decimal128("22.77"), new Decimal128("23.24"), new Decimal128("14.64"),
      new Decimal128("15.56"), new Decimal128("21.92"), new Decimal128("20.12"),
      new Decimal128("11.61"), new Decimal128("18.72"), new Decimal128("23.36"),
      new Decimal128("20.2"),  new Decimal128("16.82"), new Decimal128("22.96"),
      new Decimal128("24.18"), new Decimal128("21.01"), new Decimal128("13.07"),
      new Decimal128("20.08"), new Decimal128("20.68"), new Decimal128("24.61"),
      new Decimal128("10.31"), new Decimal128("21.66"), new Decimal128("22.16"),
      new Decimal128("17.4"),  new Decimal128("11.88"), new Decimal128("17.34"),
      new Decimal128("15.54"), new Decimal128("29.75"), new Decimal128("21.2"),
      new Decimal128("13.54"), new Decimal128("10.48"), new Decimal128("23.17"),
      new Decimal128("12.52"), new Decimal128("29.27"), new Decimal128("15.9"),
      new Decimal128("13.83"), new Decimal128("28.98"), new Decimal128("25.61"),
      new Decimal128("25.02"), new Decimal128("17.1"),  new Decimal128("11.99"),
      new Decimal128("27.68"), new Decimal128("18.94"), new Decimal128("13.21"),
      new Decimal128("21.05"), new Decimal128("22.84"), new Decimal128("20.88"),
      new Decimal128("10"),    new Decimal128("23.14"), new Decimal128("26.92"),
      new Decimal128("16.76"), new Decimal128("16.23"), new Decimal128("18.52"),
      new Decimal128("14.1"),  new Decimal128("23.03"), new Decimal128("19.02"),
      new Decimal128("21.97"), new Decimal128("10.53"), new Decimal128("24.41"),
      new Decimal128("20.99"), new Decimal128("20.09"), new Decimal128("13.32"),
      new Decimal128("13.67"), new Decimal128("19.22"), new Decimal128("13.75"),
      new Decimal128("28.22"), new Decimal128("24.39"), new Decimal128("18.91"),
      new Decimal128("13.52"), new Decimal128("20.05"), new Decimal128("18.31"),
      new Decimal128("28.24"), new Decimal128("20.83"), new Decimal128("13.23"),
      new Decimal128("19.24"), new Decimal128("23.44"), new Decimal128("18.39"),
      new Decimal128("23.13"), new Decimal128("10.74"), new Decimal128("26.73"),
      new Decimal128("27.75"), new Decimal128("22.82"), new Decimal128("16.79"),
      new Decimal128("29.19"), new Decimal128("21.37"), new Decimal128("26.28"),
      new Decimal128("16.64"),
      ... 4576 more items
    ],
    totalPurchasedQuantity: 25493,
    item: 'binder'
  },
  {
    price: [
      new Decimal128("19.95"), new Decimal128("8.08"),  new Decimal128("8.05"),
      new Decimal128("16.68"), new Decimal128("15.28"), new Decimal128("21.95"),
      new Decimal128("11.79"), new Decimal128("16.97"), new Decimal128("24.57"),
      new Decimal128("17.2"),  new Decimal128("21.46"), new Decimal128("9.44"),
      new Decimal128("9.22"),  new Decimal128("5.68"),  new Decimal128("10.63"),
      new Decimal128("6.5"),   new Decimal128("5.04"),  new Decimal128("21.53"),
      new Decimal128("9.05"),  new Decimal128("16.13"), new Decimal128("12.73"),
      new Decimal128("21.48"), new Decimal128("22.9"),  new Decimal128("12.33"),
      new Decimal128("13.77"), new Decimal128("5.87"),  new Decimal128("10.76"),
      new Decimal128("24.91"), new Decimal128("13.91"), new Decimal128("15.74"),
      new Decimal128("23.63"), new Decimal128("13.32"), new Decimal128("8.18"),
      new Decimal128("17.31"), new Decimal128("22.3"),  new Decimal128("5.43"),
      new Decimal128("13.37"), new Decimal128("17.89"), new Decimal128("23.32"),
      new Decimal128("8.84"),  new Decimal128("16.31"), new Decimal128("17.68"),
      new Decimal128("21.1"),  new Decimal128("9.52"),  new Decimal128("15.65"),
      new Decimal128("20.99"), new Decimal128("17.34"), new Decimal128("17.18"),
      new Decimal128("15.92"), new Decimal128("15.03"), new Decimal128("8.65"),
      new Decimal128("8.97"),  new Decimal128("14.12"), new Decimal128("23.66"),
      new Decimal128("21.28"), new Decimal128("20.88"), new Decimal128("5.46"),
      new Decimal128("22.9"),  new Decimal128("20.19"), new Decimal128("6.12"),
      new Decimal128("21.19"), new Decimal128("22.77"), new Decimal128("7.63"),
      new Decimal128("5.06"),  new Decimal128("19.99"), new Decimal128("23.18"),
      new Decimal128("7.87"),  new Decimal128("8.61"),  new Decimal128("13.54"),
      new Decimal128("6.92"),  new Decimal128("5.39"),  new Decimal128("5.59"),
      new Decimal128("7.32"),  new Decimal128("9.45"),  new Decimal128("16.03"),
      new Decimal128("19.05"), new Decimal128("5"),     new Decimal128("20.28"),
      new Decimal128("17.22"), new Decimal128("19.59"), new Decimal128("8.86"),
      new Decimal128("10.37"), new Decimal128("20.34"), new Decimal128("11.13"),
      new Decimal128("23.61"), new Decimal128("21.16"), new Decimal128("21.42"),
      new Decimal128("24.88"), new Decimal128("10.21"), new Decimal128("24.65"),
      new Decimal128("7.91"),  new Decimal128("6.71"),  new Decimal128("11.09"),
      new Decimal128("22.8"),  new Decimal128("13.38"), new Decimal128("15.32"),
      new Decimal128("5.65"),  new Decimal128("6.84"),  new Decimal128("12.31"),
      new Decimal128("14.05"),
      ... 4405 more items
    ],
    totalPurchasedQuantity: 25078,
    item: 'envelopes'
  },
  {
    price: [
      new Decimal128("35.29"), new Decimal128("18.47"), new Decimal128("20.95"),
      new Decimal128("33.09"), new Decimal128("30.08"), new Decimal128("32.1"),
      new Decimal128("8.57"),  new Decimal128("27.24"), new Decimal128("27.7"),
      new Decimal128("13.59"), new Decimal128("17.6"),  new Decimal128("28.41"),
      new Decimal128("29.81"), new Decimal128("36.71"), new Decimal128("14.05"),
      new Decimal128("5.45"),  new Decimal128("8.27"),  new Decimal128("11.92"),
      new Decimal128("12.83"), new Decimal128("19.45"), new Decimal128("22.33"),
      new Decimal128("21.36"), new Decimal128("37.41"), new Decimal128("21.82"),
      new Decimal128("34.43"), new Decimal128("24.11"), new Decimal128("23.75"),
      new Decimal128("24.4"),  new Decimal128("18.87"), new Decimal128("18.09"),
      new Decimal128("25.15"), new Decimal128("11.5"),  new Decimal128("8.11"),
      new Decimal128("5.65"),  new Decimal128("11.91"), new Decimal128("9.91"),
      new Decimal128("5.83"),  new Decimal128("14.04"), new Decimal128("32.2"),
      new Decimal128("34.61"), new Decimal128("19.32"), new Decimal128("25.83"),
      new Decimal128("21.06"), new Decimal128("39.38"), new Decimal128("28.1"),
      new Decimal128("35.27"), new Decimal128("13.76"), new Decimal128("20.69"),
      new Decimal128("5.42"),  new Decimal128("19.36"), new Decimal128("11.87"),
      new Decimal128("7.67"),  new Decimal128("5.91"),  new Decimal128("5.77"),
      new Decimal128("9.99"),  new Decimal128("10.02"), new Decimal128("36.28"),
      new Decimal128("34.83"), new Decimal128("31.88"), new Decimal128("36.18"),
      new Decimal128("14.38"), new Decimal128("6.96"),  new Decimal128("19.04"),
      new Decimal128("30.1"),  new Decimal128("37.43"), new Decimal128("5.12"),
      new Decimal128("39.91"), new Decimal128("27.87"), new Decimal128("30.99"),
      new Decimal128("17.4"),  new Decimal128("13.41"), new Decimal128("39.32"),
      new Decimal128("15.48"), new Decimal128("10.86"), new Decimal128("26.7"),
      new Decimal128("15.07"), new Decimal128("30.95"), new Decimal128("16.68"),
      new Decimal128("5.02"),  new Decimal128("18.69"), new Decimal128("6.1"),
      new Decimal128("10.6"),  new Decimal128("31.54"), new Decimal128("5.62"),
      new Decimal128("6.83"),  new Decimal128("28.62"), new Decimal128("11.3"),
      new Decimal128("20.28"), new Decimal128("14.49"), new Decimal128("34.21"),
      new Decimal128("15.91"), new Decimal128("19.35"), new Decimal128("28.73"),
      new Decimal128("37.1"),  new Decimal128("36.86"), new Decimal128("37.69"),
      new Decimal128("17.49"), new Decimal128("24.18"), new Decimal128("27.8"),
      new Decimal128("31.9"),
      ... 6772 more items
    ],
    totalPurchasedQuantity: 20727,
    item: 'notepad'
  },
  {
    price: [
      new Decimal128("56.12"), new Decimal128("42.9"),  new Decimal128("31.41"),
      new Decimal128("68.95"), new Decimal128("23.08"), new Decimal128("59.86"),
      new Decimal128("60.56"), new Decimal128("47.12"), new Decimal128("69.28"),
      new Decimal128("42.7"),  new Decimal128("36.13"), new Decimal128("26.64"),
      new Decimal128("69.88"), new Decimal128("75.21"), new Decimal128("66.73"),
      new Decimal128("47.36"), new Decimal128("28.24"), new Decimal128("22.01"),
      new Decimal128("57.02"), new Decimal128("37.37"), new Decimal128("71.57"),
      new Decimal128("57.58"), new Decimal128("7.49"),  new Decimal128("41.65"),
      new Decimal128("66.41"), new Decimal128("9.44"),  new Decimal128("72.88"),
      new Decimal128("70.71"), new Decimal128("52.35"), new Decimal128("36.69"),
      new Decimal128("40.89"), new Decimal128("59.55"), new Decimal128("18.22"),
      new Decimal128("72.32"), new Decimal128("69.63"), new Decimal128("40.01"),
      new Decimal128("15.57"), new Decimal128("48.87"), new Decimal128("71.34"),
      new Decimal128("12.34"), new Decimal128("10.8"),  new Decimal128("5.65"),
      new Decimal128("48.25"), new Decimal128("7.01"),  new Decimal128("20.31"),
      new Decimal128("55.37"), new Decimal128("72.56"), new Decimal128("78.65"),
      new Decimal128("41.01"), new Decimal128("14.66"), new Decimal128("54.63"),
      new Decimal128("70.56"), new Decimal128("54.85"), new Decimal128("15.67"),
      new Decimal128("23.65"), new Decimal128("39.82"), new Decimal128("6.89"),
      new Decimal128("62.03"), new Decimal128("46.55"), new Decimal128("25.27"),
      new Decimal128("72.04"), new Decimal128("16.94"), new Decimal128("40.79"),
      new Decimal128("14.79"), new Decimal128("41.19"), new Decimal128("39.66"),
      new Decimal128("13.32"), new Decimal128("12.73"), new Decimal128("66.44"),
      new Decimal128("44.73"), new Decimal128("76.38"), new Decimal128("53.26"),
      new Decimal128("32.4"),  new Decimal128("51.6"),  new Decimal128("71"),
      new Decimal128("33.6"),  new Decimal128("16.73"), new Decimal128("64.83"),
      new Decimal128("33.55"), new Decimal128("70.71"), new Decimal128("77.3"),
      new Decimal128("18.42"), new Decimal128("40.22"), new Decimal128("16.86"),
      new Decimal128("62.22"), new Decimal128("46.81"), new Decimal128("41.95"),
      new Decimal128("51.06"), new Decimal128("66.05"), new Decimal128("54.32"),
      new Decimal128("76.36"), new Decimal128("28.43"), new Decimal128("41.36"),
      new Decimal128("20.17"), new Decimal128("51.7"),  new Decimal128("64.47"),
      new Decimal128("45.6"),  new Decimal128("27.31"), new Decimal128("15.88"),
      new Decimal128("11.86"),
      ... 4459 more items
    ],
    totalPurchasedQuantity: 13766,
    item: 'pens'
  },
  {
    price: [
      new Decimal128("40.01"), new Decimal128("37.55"), new Decimal128("43.56"),
      new Decimal128("15.98"), new Decimal128("31.19"), new Decimal128("46.71"),
      new Decimal128("43.63"), new Decimal128("20.61"), new Decimal128("14.96"),
      new Decimal128("38.37"), new Decimal128("45.86"), new Decimal128("17.3"),
      new Decimal128("20.97"), new Decimal128("14.6"),  new Decimal128("47.95"),
      new Decimal128("30.6"),  new Decimal128("30.36"), new Decimal128("36.08"),
      new Decimal128("26.15"), new Decimal128("40.38"), new Decimal128("38.93"),
      new Decimal128("19.72"), new Decimal128("35.46"), new Decimal128("16.15"),
      new Decimal128("21.44"), new Decimal128("37"),    new Decimal128("11.99"),
      new Decimal128("38.65"), new Decimal128("30.95"), new Decimal128("10.26"),
      new Decimal128("35.89"), new Decimal128("39.07"), new Decimal128("41.62"),
      new Decimal128("15.17"), new Decimal128("31.95"), new Decimal128("14.81"),
      new Decimal128("15.34"), new Decimal128("42.37"), new Decimal128("21.78"),
      new Decimal128("45.68"), new Decimal128("19.28"), new Decimal128("14.48"),
      new Decimal128("28.57"), new Decimal128("36.84"), new Decimal128("49.1"),
      new Decimal128("35.29"), new Decimal128("34.5"),  new Decimal128("35.71"),
      new Decimal128("39.58"), new Decimal128("18.37"), new Decimal128("14.68"),
      new Decimal128("47.64"), new Decimal128("48.17"), new Decimal128("37.84"),
      new Decimal128("18.66"), new Decimal128("20.1"),  new Decimal128("43.11"),
      new Decimal128("24.95"), new Decimal128("32.15"), new Decimal128("37.48"),
      new Decimal128("27.51"), new Decimal128("12.17"), new Decimal128("28.52"),
      new Decimal128("33.22"), new Decimal128("44.74"), new Decimal128("28.94"),
      new Decimal128("30.89"), new Decimal128("39.5"),  new Decimal128("27.41"),
      new Decimal128("13.82"), new Decimal128("11.79"), new Decimal128("16.5"),
      new Decimal128("32.38"), new Decimal128("30.27"), new Decimal128("10.22"),
      new Decimal128("42.72"), new Decimal128("14.53"), new Decimal128("47.88"),
      new Decimal128("12.51"), new Decimal128("20.2"),  new Decimal128("42.21"),
      new Decimal128("40.19"), new Decimal128("10.06"), new Decimal128("41.27"),
      new Decimal128("12.04"), new Decimal128("37.45"), new Decimal128("12.31"),
      new Decimal128("16.08"), new Decimal128("41.91"), new Decimal128("25.37"),
      new Decimal128("21.07"), new Decimal128("36.91"), new Decimal128("13.37"),
      new Decimal128("28.33"), new Decimal128("43.31"), new Decimal128("31.75"),
      new Decimal128("41.1"),  new Decimal128("31.92"), new Decimal128("36.09"),
      new Decimal128("36.78"),
      ... 2146 more items
    ],
    totalPurchasedQuantity: 12092,
    item: 'printer paper'
  },
  {
    price: [
      new Decimal128("77.71"),
      new Decimal128("83.28"),
      new Decimal128("106.6"),
      new Decimal128("82.73"),
      new Decimal128("127.59"),
      new Decimal128("61.16"),
      new Decimal128("87.13"),
      new Decimal128("61.11"),
      new Decimal128("187.16"),
      new Decimal128("83.27"),
      new Decimal128("150.18"),
      new Decimal128("57.14"),
      new Decimal128("116.93"),
      new Decimal128("102.7"),
      new Decimal128("142.9"),
      new Decimal128("55.55"),
      new Decimal128("149.09"),
      new Decimal128("95.65"),
      new Decimal128("54.49"),
      new Decimal128("114.42"),
      new Decimal128("46.9"),
      new Decimal128("41.78"),
      new Decimal128("117.64"),
      new Decimal128("158.88"),
      new Decimal128("66.04"),
      new Decimal128("137.1"),
      new Decimal128("135.83"),
      new Decimal128("40.69"),
      new Decimal128("125.22"),
      new Decimal128("134.93"),
      new Decimal128("117.25"),
      new Decimal128("182.14"),
      new Decimal128("107.94"),
      new Decimal128("105.63"),
      new Decimal128("195.17"),
      new Decimal128("157.33"),
      new Decimal128("169.68"),
      new Decimal128("114.52"),
      new Decimal128("105.7"),
      new Decimal128("119.99"),
      new Decimal128("173.97"),
      new Decimal128("112.49"),
      new Decimal128("180.54"),
      new Decimal128("194.26"),
      new Decimal128("42.91"),
      new Decimal128("79.24"),
      new Decimal128("130.17"),
      new Decimal128("166.58"),
      new Decimal128("97.83"),
      new Decimal128("87.41"),
      new Decimal128("176.47"),
      new Decimal128("105.02"),
      new Decimal128("132.13"),
      new Decimal128("100.86"),
      new Decimal128("117.01"),
      new Decimal128("45.07"),
      new Decimal128("140.39"),
      new Decimal128("78.27"),
      new Decimal128("129.88"),
      new Decimal128("153.74"),
      new Decimal128("150.04"),
      new Decimal128("110.75"),
      new Decimal128("42.92"),
      new Decimal128("173.38"),
      new Decimal128("138.07"),
      new Decimal128("136.41"),
      new Decimal128("86.32"),
      new Decimal128("190.87"),
      new Decimal128("56.7"),
      new Decimal128("149.35"),
      new Decimal128("140.94"),
      new Decimal128("88.69"),
      new Decimal128("150.37"),
      new Decimal128("56.83"),
      new Decimal128("75.99"),
      new Decimal128("153.84"),
      new Decimal128("129.12"),
      new Decimal128("180.33"),
      new Decimal128("106.16"),
      new Decimal128("176.37"),
      new Decimal128("118.34"),
      new Decimal128("170.72"),
      new Decimal128("163.51"),
      new Decimal128("173.11"),
      new Decimal128("92.72"),
      new Decimal128("106.7"),
      new Decimal128("132.21"),
      new Decimal128("140.41"),
      new Decimal128("120.81"),
      new Decimal128("69.4"),
      new Decimal128("87.08"),
      new Decimal128("190.08"),
      new Decimal128("143.51"),
      new Decimal128("83.66"),
      new Decimal128("150.58"),
      new Decimal128("160.54"),
      new Decimal128("128.9"),
      new Decimal128("143.31"),
      new Decimal128("79.6"),
      new Decimal128("101.15"),
      ... 2209 more items
    ],
    totalPurchasedQuantity: 6918,
    item: 'backpack'
  },
  {
    price: [
      new Decimal128("866.5"),
      new Decimal128("596.33"),
      new Decimal128("1259.02"),
      new Decimal128("604.12"),
      new Decimal128("584.56"),
      new Decimal128("565.42"),
      new Decimal128("1217.84"),
      new Decimal128("644.76"),
      new Decimal128("1223.33"),
      new Decimal128("806.84"),
      new Decimal128("896.67"),
      new Decimal128("1541.76"),
      new Decimal128("862.74"),
      new Decimal128("910.07"),
      new Decimal128("898.84"),
      new Decimal128("1376.45"),
      new Decimal128("542.81"),
      new Decimal128("1397.24"),
      new Decimal128("1588.12"),
      new Decimal128("440.97"),
      new Decimal128("796.74"),
      new Decimal128("1597.31"),
      new Decimal128("1577.42"),
      new Decimal128("881.57"),
      new Decimal128("1531.69"),
      new Decimal128("609.18"),
      new Decimal128("1586.7"),
      new Decimal128("405.34"),
      new Decimal128("1220.09"),
      new Decimal128("918.74"),
      new Decimal128("568.96"),
      new Decimal128("1544.96"),
      new Decimal128("789.22"),
      new Decimal128("1218.77"),
      new Decimal128("1529.62"),
      new Decimal128("1385.58"),
      new Decimal128("1181.52"),
      new Decimal128("1044.03"),
      new Decimal128("1214.46"),
      new Decimal128("1150.97"),
      new Decimal128("1204.33"),
      new Decimal128("1350.8"),
      new Decimal128("784.97"),
      new Decimal128("1074.61"),
      new Decimal128("1115.85"),
      new Decimal128("545.7"),
      new Decimal128("1519.33"),
      new Decimal128("828.82"),
      new Decimal128("989.41"),
      new Decimal128("1360.17"),
      new Decimal128("1424.47"),
      new Decimal128("1528.04"),
      new Decimal128("1082.75"),
      new Decimal128("893.66"),
      new Decimal128("1083.62"),
      new Decimal128("1482.78"),
      new Decimal128("883.08"),
      new Decimal128("617.57"),
      new Decimal128("1136.04"),
      new Decimal128("1419.64"),
      new Decimal128("864.31"),
      new Decimal128("548.02"),
      new Decimal128("513.2"),
      new Decimal128("523.3"),
      new Decimal128("693.77"),
      new Decimal128("1543.66"),
      new Decimal128("898.59"),
      new Decimal128("899.97"),
      new Decimal128("903.7"),
      new Decimal128("1282.77"),
      new Decimal128("696.85"),
      new Decimal128("709.07"),
      new Decimal128("1094.18"),
      new Decimal128("1125.67"),
      new Decimal128("1340.76"),
      new Decimal128("513.45"),
      new Decimal128("1408.92"),
      new Decimal128("1462.61"),
      new Decimal128("1285.88"),
      new Decimal128("678.55"),
      new Decimal128("1069.26"),
      new Decimal128("1307.22"),
      new Decimal128("1442.88"),
      new Decimal128("973.89"),
      new Decimal128("1554.35"),
      new Decimal128("560.93"),
      new Decimal128("1582.98"),
      new Decimal128("656.84"),
      new Decimal128("1242.38"),
      new Decimal128("1045.57"),
      new Decimal128("757.48"),
      new Decimal128("1444.41"),
      new Decimal128("571.4"),
      new Decimal128("1166.41"),
      new Decimal128("696.72"),
      new Decimal128("1324.86"),
      new Decimal128("1178.89"),
      new Decimal128("1230.13"),
      new Decimal128("1267.91"),
      new Decimal128("862.14"),
      ... 2171 more items
    ],
    totalPurchasedQuantity: 6793,
    item: 'laptop'
  }
]


```

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.