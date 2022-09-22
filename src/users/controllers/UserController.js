const db = require('../../../dbConfig/db/models');
const errorResponse = require('../../error/errorResponse')
const createNewUser = require('../useCase/createUser');
const findUserUC = require('../useCase/findUserById');
const upDateUserUC = require('../useCase/updateUser');
const deleteUserUC = require('../useCase/deleteUser');
const loginUC = require('../useCase/login');

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
        try {
            //TO DO: Make a MAPPER that return USER without password
            const newUser = await upDateUserUC(userId, body)
            return res.status(200).send({
                message: "User updated successfully!",
                ...newUser
            });

        } catch (error) {
            errorResponse(error, res);
        }
    };

    static async deleteUser (req, res) {
        const userId = req.params.id
        try {
            await deleteUserUC(userId)
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