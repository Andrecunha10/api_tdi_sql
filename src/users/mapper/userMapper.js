class userMapper {
    static oneUser ({ id, name, nickname, email, departament, type, status }) {
        return {
            id,
            name,
            nickname,
            email, 
            departament,
            type,
            status
        }
    }

    static multiplusUsers (users) {
        return users.map( item => {
            return {
                id: item.id,
                name: item.name,
                nickname: item.nickname,
                email: item.email, 
                departament: item.departament,
                type: item.type,
                status: item.status
            }
        })
    }
};

module.exports = userMapper;