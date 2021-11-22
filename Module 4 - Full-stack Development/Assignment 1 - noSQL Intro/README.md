# Introduction to NoSQL: Assignment

## Brief

In the assignment submission, you will conclude your findings presented over zoom.

### Question 1 - Which use case your (temporary) group was working on?

```
Case 1,
Case 2,
Case 3
```

### Question 2 - Summarize your solutions and the database(s) used (you may incorporate feedback from instructor and produce a personal conclusion)

```
Case 1: Document-database (MongoDB) - to store reviews that were scraped through the web, and select the ones that were filtered as negative.

Case 2: Key-Value (redis) - temperature/weather based on location (hourly)

Case 3: Document-database (MongoDB) - can save multiple metadata for title, article content etc. A document-database will improve loading speed of complex querying to overcome the issue in the case study which is from the high traffic. Hashtags grouping by theme can also be included in the document database to group articles by similar themes.
```

### Question 3 - Please replicate the data format you have used in the following code block.

```
Case 1:
Reviews: [
    {
    "date": "22/11/2020",
    "title": "Product XXX is really bad", 
    "body": "",
    "influencerId": "3",
    "commentId": "492",
    "rating": "3 stars",
    "replies": [
        {"user1": "abcde"}, 
        {"user2": "asdf"}
        ]
    },
    {
    "date": "22/11/2020",
    "title": "bad product, don't buy", 
    "body": "",
    "influencerId": "36",
    "commentId": "349",
    "rating": "2 stars",
    "replies": [
        {"user1": "agree"}, 
        {"user2": "can't agree more"}
        ]
    },
]
______________________________

Case 2:
Key-value pair generated automatically by timer every hour:
Key --> location
Value --> Temperature and weather
{"location1": {
    "0900": {
        "temperature": "31",
        "weather": "sunny"
        },
    "1000": {
        "temperature": "30",
        "weather": "sunny"
        },
    "1100": {
        "temperature": "31",
        "weather": "sunny"
        }
    },
 "location2": {
    "0900": {
        "temperature": "29",
        "weather": "cloudy"
        },
    "1000": {
        "temperature": "28",
        "weather": "rainy"
        },
    "1100": {
        "temperature": "27",
        "weather": "thunderstorm"
        }
    },
}
______________________________
Case 3: 
{
    title: "",
    image: 'url_to_image',
    createdTime:"",
    updatedTime:"",
    body: "",
    categories: ['health'],
    tags: ['covid'],
    author: {
        authorName, 
        authorAvatar, 
        authorProfile
        }
}
```

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
