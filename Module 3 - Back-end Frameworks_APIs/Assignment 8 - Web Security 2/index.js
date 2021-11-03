const express = require('express');
const app = express();
app.use(express.json());

const router = express.Router();
const UserController = require('./controllers/user.controller');
const userController = new UserController();

router.post('/register', async (request, response) => {
    await userController.register(request,response);
});
router.post('/login', async (request, response) => {
    await userController.login(request,response);
});

app.use(router);

app.listen(3000, () => {
    console.log("Listening to port 3000...");
})

module.exports = app;
