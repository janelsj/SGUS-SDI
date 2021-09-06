# GIT & CLI: Assignment

## Brief 

This is a research assignment where students will be given time for research and put into group for discussion.

Version control tools are plenty and have wide range of practices. This research assignment aims to help learners expand their choice of version control tools (Part 1) and being acquainted with the branching strategies best practices in the industry (Part 2).

| Time    | Item          |
|---------|---------------|
| 40 mins | Self readings |
| 10 mins | Q&A           |
| 10 mins | Break         |
| 30 mins | Discussion    |
| 30 mins | Presentation  |

### Part 1

Problem Statement: GIT is not the only version control tool in the industry. 

[Reference Link](https://www.softwaretestinghelp.com/version-control-software/) or search online with key word "Version Control Tool".

Discussion Points:

1. What are the version control tools used in the industry?
```
Common version control tools used include:
1) Git
2) CVS
3) SVN
4) Mercurial
5) Monotone
6) Bazaar
7) TFS
8) VSTS
9) Perforce Helix Core 
10) IBM Rational ClearCase
11) Revision Control System 
12) Visual SourceSafe(VSS) 
13) CA Harvest Software Change Manager
14) PVCS 
15) darcs 
```
2. Why are they being used?
```
Version control tools are used to allow us to keep track of the changes in the code so that if something goes wrong, we can make comparisons in different code versions and revert to any previous version that we want. This is necessary particularly where multiple developers are continuously working on changing the source code.
```
### Part 2

Problem Statement: Branching strategy varies largely across companies’ practices and there are not fixed way of doing this.

Reference Links:
- https://launchdarkly.com/blog/git-branching-strategies-vs-trunk-based-development/
- https://www.gitkraken.com/learn/git/best-practices/git-branch-strategy 
- https://www.creativebloq.com/web-design/choose-right-git-branching-strategy-121518344

Discussion Points:

1. How many branching strategies are there? What are they?
```
1. Git Flow Branch Strategy:
        Branches include: MAIN, DEVELOP, FEATURE, RELEASE, HOTFIX.
        Primary branches -> MAIN and DEVELOP.
        Supporting branches -> FEATURE, RELEASE, HOTFIX (hold changes related to emergency bug fixes).
```
         _______________________________________________________________________________________
        | PROS                                     | CONS                                       |
        |------------------------------------------|--------------------------------------------|
        | - The various types of branches make it  | - This strategy could overcomplicate and   |
        |   intuitive to organize work in the team.|   slow the development process and release |
        | - The systematic development process     |   cycles.                                  |
        |   allows for efficient testing.          | - Cannot support Continuous Integration    |
        | - Multiple versions of the production    |   or Continuous Delivery due to the long   |
        |   code can be supported with the release |   development cycle.                       |
        |   branches.                              |                                            |
        |__________________________________________|____________________________________________|
```
2. GitHub Flow Branch Strategy:
        Branches include: MAIN, FEATURE.
        MAIN branch -> contains production-ready code.
        FEATURE branches (the other branches) -> contain work on new features and bug fixes, 
        which will be merged back into the main branch when the work is finished and reviewed.
```
         _______________________________________________________________________________________
        | PROS                                     | CONS                                       |
        |------------------------------------------|--------------------------------------------|
        | - GitHub flow is the most simple out of  | - This strategy is unable to support       |
        |   the three strategies.                  |   multiple versions of code in production  |
        | - The simplicity of this workflow allows |   at the same time.                        |
        |   for Continuous Delivery and Continuous | - The lack of dedicated development        |
        |   Integration.                           |   branches makes GitHub flow more          |
        | - This strategy works well for small     |   susceptible to bugs in production.       |
        |   teams and web applications.            |                                            |
        |__________________________________________|____________________________________________|
```
3. GitLab Flow Branch Strategy:
        Branches include: MAIN, FEATURE, ENVIRONMENT.
        MAIN branch -> contains production-ready code.
        FEATURE branch -> contains work for new features and bug fixes, which will be 
        merged back into the main branch once the work is finished and reviewed.
        ENVIRONMENT branches (the other branches) -> can contain production or 
        pre-production, or release branches, depending on situation.
```
         _______________________________________________________________________________________
        | PROS                                     | CONS                                       |
        |------------------------------------------|--------------------------------------------|
        | - Simpler than Git Flow Branch Strategy, | - Not the simplest strategy.               |
        |   but more complex than GitHub Flow      | - Can lead to messy collaboration as it's  |
        |   Branch Strategy.                       |   not the most structured branching        |
        | - More organised and structured than the |   strategy.                                |
        |   GitHub Flow Branch Strategy.           |                                            |
        | - GitLab Flow can allow for Continuous   |                                            |
        |   Delivery and versioned releases.       |                                            |
        |__________________________________________|____________________________________________|
```
2. Which branching strategy looks the most practical for you personally?
```
GitHub Flow Branch Strategy, since our team is small and and this strategy also allows for
continuous delivery and continuous integration.
```
3. Consider the following scenarios, recommend a branching strategy suitable for the scenario, and explain why?
    a. Startup with less than 5 developers
    ```
    GitHub Flow Branch Strategy.
    This is a simple strategy that allows continuous delivery and continuous integration from 
    featured branches into the main branch. It is ideal for small groups of developers as 
    described in this scenario.
    ```
    b. Startup with multiple small team of developers (3 teams of 3 developers)
    ```
    GitLab Flow Branch Strategy.
    Since the startup consists of multiple teams, using GitLab Flow Branch Strategy allows 
    for more organisation and structure for the teams to focus on different parts (e.g. feature
    branches, environment release branches etc) of the startup than GitHub Flow, but at the 
    same time does not overcomplicate the development process like Git Flow.
    ```
    c. Startup with no specific team make up. It’s just a group of 8 developers.
    ```
    GitHub Flow Branch Strategy.
    This is a simple strategy that allows continuous delivery and continuous integration 
    from featured branches into the main branch. It is ideal for small startups with no 
    team make-up as described in this scenario, assuming that without team make-up, each 
    developer is contributing changes to the source code one at a time instead of having 
    multiple versions of the code in production at the same time.
    ```
    d. SME with multiple small team of developers (4 teams of 3 developers)
    ```
    Git Flow Branch Strategy.
    Since it consists of many teams, this strategy with the various types of branches 
    make it intuitive to organize work in the team, and multiple versions of the 
    production code can be supported at the same time.
    ```
    e. MNC & Banking with multiple large team of developers (10 teams of 12 developers)
    ```
    Git Flow Branch Strategy.
    Since it consists of many teams, this strategy with the various types of branches 
    make it intuitive to organize work in the team, and multiple versions of the 
    production code can be supported at the same time.
    ```

## Submission Guidelines

- Cite any relevant sources consulted during your research
- Solve the problems using your own code
- Do not copy and paste solutions from the source material
- Submit your assignment to black board.
