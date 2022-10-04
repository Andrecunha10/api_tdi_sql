const db = require('../../../dbConfig/db/models');
const errorResponse = require('../../error/errorResponse')
const createNewUser = require('../services/createUser');
const findUserUC = require('../services/findUserById');
const upDateUserUC = require('../services/updateUser');
const deleteUserUC = require('../services/deleteUser');
const loginUC = require('../services/login');

class UserController {
    static async getAll(req, res) {
        try {
          const allUser = await db.Users.findAll();
          //TO DO: Make a MAPPER that return USERS without password
          return res.status(200).send(allUser);
        } catch (error) {
          return res.status(500).send(error.message);
        }
      }
    
    static async findUser(req, res ) {
        const userId = req.params.id;

        try {
            //TO DO: Make a MAPPER that return USER without password
            const user = await findUserUC(userId)
            res.status(200).send(user)

        } catch (error) {
            errorResponse(error, res);
        }
    };

    static async createUser(req, res) {

        const body = req.body;

        try {
            //TO DO: Make a MAPPER that return USERs without password
            const newUser = await createNewUser(body);

            return res.status(201).send(newUser);

        } catch (error) {
            errorResponse(error, res);
        };
    };

    static async updateUser (req, res) {
        const userId = req.params.id;
        const body = req.body;
        const user = req.user;
        try {
            //TO DO: Make a MAPPER that return USER without password
            const newUser = await upDateUserUC(userId, body, user)
            return res.status(200).send({
                message: "User updated successfully!",
                ...newUser
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
            //TO DO: Make a MAPPER that return USER without password
            const userLogin = await loginUC(email, password);
            return res.status(200).send(userLogin);
        }catch(error) {
            errorResponse(error, res);
        }
    };
}


module.exports = UserController;