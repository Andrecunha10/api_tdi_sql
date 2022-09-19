const db = require('../../../dbConfig/db/models');
const findUserByEmail = require('../useCase/findUserByEmail');
const bcrypt = require("bcrypt");
const {BusinessError} = require('../../error/errorEntity');
const token = require('../../utils/token')

module.exports = async ( { name, nickname, email, password, departament } ) => {

        const encryptedPassword = await bcrypt.hash(password, 10);

        const verifyIfUserExists = await findUserByEmail(email)

        if(verifyIfUserExists) {
            throw new BusinessError('User email already exists', 202)
        };

        const user = await db.Users.create({
            name,
            nickname,
            email,
            password: encryptedPassword,
            departament,
            type: 2,
            status: 'active'
        });

        const userResponse = {
            id: user.dataValues.id,
            name,
            nickname,
            email,
            departament,
            type: user.dataValues.type,
            status: user.dataValues.status,
          }
          userResponse.token = token(userResponse.id, userResponse.email)
          
          return userResponse

}
