const findUserByEmailUC = require('../services/findUserByEmail');
const bcrypt = require('bcrypt');

module.exports = async (email, password) => {
    const findUser = await findUserByEmailUC(email);

    if(!findUser){
        throw new BusinessError('Invalid email', 400);
    }

    const comparePassword = await bcrypt.compare(password, findUser.dataValues.password)

    if(comparePassword === false){
        throw new BusinessError('Invalid password', 400);
    }

    return findUser
}