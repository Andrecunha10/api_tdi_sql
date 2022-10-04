const {Router} = require('express');
const route = Router();
const UserController = require('./controllers/UserController');
const createUserSchema = require('../schema/createUserSchema');
const verifyParamsId = require('../schema/verifyParamsId');
const updateUserSchema = require('../schema/updateUserSchema');
const loginSchema = require('../schema/loginSchema');
const authentication = require('../auth/authentication');
const verifyUserTypes = require('../auth/verifyUserType');

route.get('/list', authentication, verifyUserTypes, UserController.getAll);
route.get('/find/:id', authentication, verifyUserTypes, verifyParamsId, UserController.findUserById);
route.post('/create', createUserSchema, UserController.createUser);
route.post('/createAdm', createUserSchema, authentication, verifyUserTypes, UserController.createAdmUser);
route.put('/update/:id', authentication, verifyParamsId, updateUserSchema, UserController.updateUser);
route.delete('/delete/:id', authentication, verifyParamsId, UserController.deleteUser);
route.post('/login', loginSchema, UserController.login);

module.exports = route;