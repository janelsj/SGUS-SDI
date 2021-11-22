# Introduction to MongoDB: Assignment

## Brief

In most of the scenario that utilizes MongoDB, there are little update and delete operations but more bulk insertion and queries. In this assignment, we will explore on complex queries. Since MongoDB stores unstructured data in the form of documents, the query we write may not be as systemized as compared to SQL.

Follow the instruction below to load sample file provided by MongoDB. 

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

Once you are down, login to MongoDB session with `mongosh`.

Run the following command in `mongosh` and you will see all existing databases:

```
show databases
```

Sample Output:

<img src="./assets/images/show-databases-output.png" />

Run the following command to choose the database you are going to work with:

```
use sample_weatherdata
```

Output:

```
switched to db sample_restaurants
```

Run the following command to view all collections within the selected database:

```
show collections
```

Output:
```
neighborhoods
restaurants
```

Perform a `find()` query with `db.restaurants.find()` and you will receive an output containing the JSON Array.

---

## Working on Queries

Attempt the following queries.

### 1. List distinct cuisine

```
// Your answer here
```

### 2. List restaurants name where cuisine is "Turkish" 

```
// Your answer here
```

### 3. List restuarants where `grade` is equals to `C`

```
// Your answer here
```

### 4. List only the restaurants name in descending order

```
// Your answer here
```

### 5. List restaurants where name contains `Zo`

```
// Your answer here
```

## Use the Reference Guide

Read the [reference guide](https://docs.mongodb.com/manual/tutorial/query-documents/) and attempt three other queries that caught your attention (that might be useful).

```
// Query 1
```

```
// Query 2
```

```
// Query 3
```

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.