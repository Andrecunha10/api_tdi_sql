const db = require('../../../dbConfig/db/models');
const errorResponse = require('../../error/errorResponse')
const createNewUser = require('../services/createUser');
const findUserUC = require('../services/findUserById');
const upDateUserUC = require('../services/updateUser');
const deleteUserUC = require('../services/deleteUser');
const loginUC = require('../services/login');
const token = require('../../auth/token');
const userMapper = require('../mapper/userMapper');

class UserController {
    static async getAll(req, res) {
        try {
          const allUser = await db.Users.findAll();
          
          const usersResponse = userMapper.multiplusUsers(allUser);

          return res.status(200).send(usersResponse);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }
    
    static async findUserById(req, res ) {
        const userId = req.params.id;

        try {

            const user = await findUserUC(userId);

            const userResponse = userMapper.oneUser(user);

            res.status(200).send(userResponse);

        } catch (error) {
            errorResponse(error, res);
        }
    };

    static async createUser(req, res) {

        const body = req.body;

        try {

            const newUser = await createNewUser(body);

            const userResponse = userMapper.oneUser(newUser);

            userResponse.token = token(userResponse.id, userResponse.email, userResponse.type);

            return res.status(201).send(userResponse);

        } catch (error) {
            errorResponse(error, res);
        };
    };

    static async createAdmUser(req, res) {

        const body = req.body;
        body.type = 1

        try {
            const newUser = await createNewUser(body);

            const userResponse = userMapper.oneUser(newUser);

            return res.status(201).send(userResponse);

        } catch (error) {
            errorResponse(error, res);
        };
    };

    static async updateUser (req, res) {
        const userId = req.params.id;
        const body = req.body;
        const user = req.user;
        try {

            const updatedUser = await upDateUserUC(userId, body, user);
            const userResponse = userMapper.oneUser(updatedUser)
            return res.status(200).send({
                message: "User updated successfully!",
                ...userResponse
            });

        } catch (error) {
            errorResponse(error, res);
        }
    };

    static async deleteUser (req, res) {
        const userId = req.params.id;
        const user = req.user;
        try {
            await deleteUserUC(userId, user)
            return res.status(200).send({
                message: 'User deleted successfully!'
            })
        } catch (error) {
            errorResponse(error, res);
        }
    };

    static async login(req, res) {
        const {email, password } = req.body;

        try{

            const userLogin = await loginUC(email, password);

            const userResponse = userMapper.oneUser(userLogin);

            userResponse.token = token(userResponse.id, email, userResponse.type);

            return res.status(200).send(userResponse);
        }catch(error) {
            errorResponse(error, res);
        }
    };
}

module.exports = UserController;