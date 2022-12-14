const db = require('../../../dbConfig/db/models');
const findUserByEmail = require('../services/findUserByEmail');
const bcrypt = require("bcrypt");
const {BusinessError} = require('../../error/errorEntity');

module.exports = async ( { name, nickname, email, password, departament, type } ) => {

        const encryptedPassword = await bcrypt.hash(password, 10);

        const verifyIfUserExists = await findUserByEmail(email)

        if(verifyIfUserExists) {
            throw new BusinessError('User email already exists', 202)
        };

        const user = {
            name,
            nickname,
            email,
            password: encryptedPassword,
            departament,
            type: type || 2,
            status: 'active'
        };

        if (nickname === '' || !nickname){
            const setNickname = name.split(' ')[0].slice(0,13)
            user.nickname = setNickname
        }

        const userResponse = await db.Users.create(user);
          
          return userResponse;

}
