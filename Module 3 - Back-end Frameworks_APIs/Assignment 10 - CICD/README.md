# CICD: Assignment

## Brief

In the lesson, we have created a CI Script using GitHub Actions' default template. In this assignment, we will continue to work on the CD Script by editing the file `.github/workflows/node.js.yml`. You should only edit the yml file through GitHub for this assignment. Before working on the yml file, please run the following commands to create a new branch call `stage`.

```
git checkout -b stage
git push origin stage
git checkout main
```

The above commands create a `stage` branch, push it to remote repository, and switch back to the `main` branch where you should work on.

In order to achieve this assignment, you should have read a self study [link](https://docs.github.com/en/actions/learn-github-actions/introduction-to-github-actions).

In this assignment, you are to:
1. Create a new job - `release`.
1. Use `if` and/or `needs` keyword to run `release` only if `build` is successful.
1. Define a `runs-on` with value `ubuntu-latest`
1. Define a `strategy` matrix with the same node-version as build job.
1. Use an action `everlytic/branch-merge@1.1.2` from the marketplace to merge code from `main` branch to `stage` branch.


The expected workflow:
- `build` job should run before `release` job.
- if `build` job failed, `release` job will not proceed. (you can test this with a failed unit test)

There is no actual deployment in this exercise. You are only to merge a branch to another. In a live project, there will be another workflow file that listens to a merge event on a specific branch (likely `production` branch) and run deployment script.

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.

## Assignment
Assignment activity saved [here](https://github.com/janelsj/lesson-3.10-cicd).