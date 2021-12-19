# Asynchronous Communications: Assignment

## Brief

In this assignment, you are to code from scratch using [express](https://www.npmjs.com/package/express) and [mqtt](https://www.npmjs.com/package/mqtt) library.

### Step 1: Create two Node.js Project

Create two projects and name them respectively:

1. assignment-service
2. grading-service

### Step 2: Create an API in assignment-service

In assignment-service, you are to create an endpoint `POST /assignment` with the following request body:

```json
{
    "studentId":1,
    "score":50,
}
```

This endpoint will broadcast to mqtt broker `mqtt://test.mosquitto.org` with topic `sdiassignment` with the stringified request body.

### Step 3: Setup MQTT

Setup MQTT publisher in `assignment-service` and subscriber in `grading-service`.

Use `console.log` to print the following JSON:


```json
{
    "studentId":1,
    "score":50,
    "grade":"P" // "P" for pass or "F" for fail if score below 50
}
```

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
