# Web Deployment on GitHub Pages

## Brief

### Part 1 - Create a repository in GitHub

Go to `https://github.com/<your username>` and create a repository 'deployment-test'.


### Part 2 - Create React App

Clone the repository at any location and create a react app - `npx create-react-app ./`


### Part 3 - Set GIT Remote of your app

In the command/terminal, change directory to 'deployment-test'.
Enter this command to associate your project folder to the remote git repository:
- `git init`
- `git remote add origin https://<your-username>.github.com/deployment-test`
To verify, enter:
- `git remote -v`


### Part 4 - Install gh-pages & configure package.json

- In the react app directory, run: `npm install gh-pages`
- Add the following to "scripts":
  - `"predeploy": "npm run build",`
  - `"deploy": "gh-pages -d build"`
- Add a URL to "homepage":
`"homepage": "https://<username>.github.io/deployment-test"`


### Part 5 - Push code to remote repository

Use the following git commands to push code to remote repo:
- `git add --all`
- `git commit -m "test deploy"`
- `git branch -M main`
- `git push origin main`


### Part 6 - Deploy it

- Run this command: `npm run deploy`
- Go to browser and enter the URL you have set in “homepage”.


## Lesson

Lesson activity saved [here](https://github.com/janelsj/deployment-test).
