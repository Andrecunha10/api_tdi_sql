const {Router} = require('express');
const route = Router();
const UserController = require('./controllers/UserController');
const createUserSchema = require('../schema/createUserSchema');
const verifyParamsId = require('../schema/verifyParamsId');
const updateUserSchema = require('../schema/updateUserSchema');
const loginSchema = require('../schema/loginSchema');

route.get('/list', UserController.getAll);
route.get('/find/:id', verifyParamsId, UserController.findUser);
route.post('/create', createUserSchema, UserController.createUser);
route.put('/update/:id', verifyParamsId, updateUserSchema, UserController.updateUser);
route.delete('/delete/:id', verifyParamsId, UserController.deleteUser);
route.post('/login', loginSchema, UserController.login);

module.exports = route;