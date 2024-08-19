const express = require('express');
const {createUser, handleLogin} = require("../controllers/userController");

const routerAPI = express.Router();

routerAPI.get('/', (req, res) => {
    res.status(200).json('Hello World!');
});

routerAPI.post('/register',createUser);
routerAPI.post('/login',handleLogin);



module.exports = routerAPI; //export default