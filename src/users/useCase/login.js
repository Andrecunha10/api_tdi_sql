const db = require('../../../dbConfig/db/models');
const findUserByEmailUC = require('../useCase/findUserByEmail');
const {BusinessError} = require('../../error/errorEntity');
const bcrypt = require('bcrypt');
const token = require('../../auth/token')

module.exports = async (email, password) => {
    const findUser = await findUserByEmailUC(email);

    if(!findUser){
        throw new BusinessError('Invalid email', 400);
    }

    const comparePassword = await bcrypt.compare(password, findUser.dataValues.password)

    if(comparePassword === false){
        throw new BusinessError('Invalid password', 400);
    }

    findUser.dataValues.token = token(findUser.dataValues.id, email, findUser.dataValues.type)

    return findUser
}