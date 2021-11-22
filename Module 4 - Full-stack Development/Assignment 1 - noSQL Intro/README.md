# Introduction to NoSQL: Assignment

## Brief

In the assignment submission, you will conclude your findings presented over zoom.

### Question 1 - Which use case your (temporary) group was working on?

```
Case 1
```

### Question 2 - Summarize your solutions and the database(s) used (you may incorporate feedback from instructor and produce a personal conclusion)

```
Case 1: Graph DB - which influencer is linked to which comments
Case 2: Key-Value (redis) - temperature/weather based on location (hourly)
Case 3: Document-database (MongoDB)
```

### Question 3 - Please replicate the data format you have used in the following code block.

```
Case 2:
Key-value pair generated automatically by timer every hour:
Key --> location
Value --> Temperature and weather
{"location1": {
    "temperature": "31",
    "weather": "sunny"
    },
 "location2": {
     "temperature": "29",
     "weather": "cloudy"
    },
}
_______________
{
"location1": "31, sunny",
"location2": "29, cloudy",
}
```

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
